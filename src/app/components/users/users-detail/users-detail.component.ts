import {Pupil} from '../../../shared/user.model';
import {MatDialog} from '@angular/material/dialog';
import {PopUpComponent} from './pop-up/pop-up.component';
import {DatabaseService} from '../../../database.service';
import {UsersService} from '../../../shared/users.service';
import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

interface ExperienceNode {
  name: string;
  children?: ExperienceNode[];
}
const TREE_DATA: ExperienceNode[] = [
  {
    name: 'Experience',
    children: [
      //14
      {name: 'Nutrition XP: '},
      //13
      {name: 'Activity XP: '},
      //11
      {name: 'Social XP: ' },
    ]
  },
];

/** Flat node with expandable and level information */
interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css'],
})
export class UsersDetailComponent implements OnInit, OnChanges {
  private _transformer = (node: ExperienceNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  user: Pupil;
  dummyUser: Pupil;
  canEditCode = false;
  id: number;

  constructor(private usersService: UsersService, private databaseService: DatabaseService,
              private route: ActivatedRoute, private router: Router) {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: FlatNode) => node.expandable;

  ngOnInit(): void {

    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.user = this.usersService.getUser(this.id);
        this.initDummyUser();
      }
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    const previousUser = changes.user.previousValue as Pupil;
    const currentUser = changes.user.currentValue as Pupil;
    if (this.canEditCode) {
      this.user = previousUser;
    } else {
      this.initDummyUser();
    }

    console.log('Previous: ' + (previousUser ? previousUser.personalInfo.firstName : 'NULL'));
    console.log('To be changed ' + currentUser.personalInfo.firstName);
  }

  initDummyUser() {
    this.dummyUser = <Pupil>JSON.parse(JSON.stringify(this.user));
  }

  onDelete() {
    confirm('Delete this user?') ? this.databaseService.deleteUser(this.user.uid) : console.log('User not deleted')
  }


  onStats() {
    this.router.navigate(['/statistics', this.user.uid]);
  }
}

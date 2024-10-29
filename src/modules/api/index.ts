import { AuthToken } from '../../types/podio.type';
import Application from './Application';
import Contact from './Contact';
import Hook from './Hook';
import Authorization from './Authorization';
import Comments from './Comment';
import Files from './Files';
import Item from './Item';
import Status from './Status';
import Task from './Task';
import Request from './Request';
import Space from './Space';
import User from './User';
import Organization from './Organization';
import Action from './Action';
import AppMarket from './AppMarket';
import Batch from './Batch';
import Calendar from './Calendar';
import Conversation from './Conversation';
import Device from './Device';
import Email from './Email';
import Embed from './Embed';
import Flow from './Flow';
import Form from './Form';
import Friend from './Friend';
import Grant from './Grant';
import Importer from './Importer';

export default {
  request: (props: AuthToken) => new Request(props),
  authorization: (props: AuthToken) => new Authorization(props),
  action: (props: AuthToken) => new Action(props),
  appMaket: (props: AuthToken) => new AppMarket(props),
  app: (props: AuthToken) => new Application(props),
  batch: (props: AuthToken) => new Batch(props),
  calendar: (props: AuthToken) => new Calendar(props),
  comment: (props: AuthToken) => new Comments(props),
  contact: (props: AuthToken) => new Contact(props),
  conversation: (props: AuthToken) => new Conversation(props),
  device: (props: AuthToken) => new Device(props),
  email: (props: AuthToken) => new Email(props),
  item: (props: AuthToken) => new Item(props),
  embed: (props: AuthToken) => new Embed(props),
  files: (props: AuthToken) => new Files(props),
  flow: (props: AuthToken) => new Flow(props),
  form: (props: AuthToken) => new Form(props),
  friend: (props: AuthToken) => new Friend(props),
  grant: (props: AuthToken) => new Grant(props),
  hook: (props: AuthToken) => new Hook(props),
  importer: (props: AuthToken) => new Importer(props),
  task: (props: AuthToken) => new Task(props),
  status: (props: AuthToken) => new Status(props),
  space: (props: AuthToken) => new Space(props),
  user: (props: AuthToken) => new User(props),
  organization: (props: AuthToken) => new Organization(props),
};

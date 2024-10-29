import { GetAllAttributes } from '@customTypes/task.type';
import { HttpResponse } from '../../types/http.type';
import { AuthToken } from '../../types/podio.type';
import Api from './Api';
import {
  Task as TaskType,
  TaskCount as TaskCountType,
  TaskSummary as TaskSummaryType,
  Total as TotalType,
  MiniTask as MiniTaskType,
  Label as LabelType,
  CreateLabel as CreateLabelType,
  RecurringTaskId as RecurringTaskIdType,
} from '../../types/task.type';

export default class Task extends Api {
  constructor(props: AuthToken) {
    super(props);
  }

  /**
   * Assigns the task to another user. This makes the user responsible for the task and its completion.
   * @see https://developers.podio.com/doc/tasks/assign-task-22412
   * @param {number} task_id
   * @param {any} attributes
   * @returns {Promise<HttpResponse<string>>}
   */

  assign(task_id: number, attributes: any = {}): Promise<HttpResponse<string>> {
    const requestObj = {
      method: 'post',
      url: `/task/${task_id}/assign`,
      data: attributes,
    };
    return this._httpRequest<string>(requestObj);
  }

  /**
   * Mark the given task as completed.
   * @see https://developers.podio.com/doc/tasks/complete-task-22432
   * @param {number} task_id
   * @returns {Promise<HttpResponse<RecurringTaskIdType>>}
   */

  complete(task_id: number): Promise<HttpResponse<RecurringTaskIdType>> {
    const requestObj = {
      method: 'post',
      url: `/task/${task_id}/complete`,
    };
    return this._httpRequest<RecurringTaskIdType>(requestObj);
  }

  /**
   * Creates a new personal label for the user.
   * @see https://developers.podio.com/doc/tasks/create-label-151265
   * @param {any} attributes
   * @returns {Promise<HttpResponse<CreateLabelType>>}
   */

  createLabel(attributes: any = {}): Promise<HttpResponse<CreateLabelType>> {
    const requestObj = {
      method: 'post',
      url: `/task/label/`,
      data: attributes,
    };
    return this._httpRequest<CreateLabelType>(requestObj);
  }

  /**
   * Creates a new task.
   * @see https://developers.podio.com/doc/tasks/create-task-22419
   * @param {any} attributes
   * @returns {Promise<HttpResponse<TaskType>>}
   */
  create(attributes: any = {}): Promise<HttpResponse<TaskType>> {
    const requestObj = {
      method: 'post',
      url: `/task/`,
      data: attributes,
    };
    return this._httpRequest<TaskType>(requestObj);
  }

  /**
   * Creates a new task with a reference to the given object. The valid types of objects are "item", "status", "app", "space" and "conversation".
   * @see https://developers.podio.com/doc/tasks/create-task-with-reference-22420
   * @param {string} ref_type
   * @param {number} ref_id
   * @param {any} attributes
   * @param {boolean} silent
   * @param {boolean} hook
   * @returns {Promise<HttpResponse<TaskType>>}
   */
  createFor(
    ref_type: 'item' | 'status' | 'app' | 'space' | 'conversation',
    ref_id: number,
    attributes: any = {},
    silent: boolean = false,
    hook: boolean = true,
  ): Promise<HttpResponse<TaskType>> {
    const requestObj = {
      method: 'post',
      url: `/task/${ref_type}/${ref_id}/?silent=${silent}&hook=${hook}`,
      data: attributes,
    };
    return this._httpRequest<TaskType>(requestObj);
  }

  /**
   * Deletes the label with the given id. This will remove the label from all tasks.
   * @see https://developers.podio.com/doc/tasks/delete-label-151302
   * @param {number} label_id
   * @returns {Promise<HttpResponse<string>>}
   */
  deleteLabel(label_id: number): Promise<HttpResponse<string>> {
    const requestObj = {
      method: 'delete',
      url: `/task/label/${label_id}`,
    };
    return this._httpRequest<string>(requestObj);
  }

  /**
   * Deletes the task with the given id.
   * @see https://developers.podio.com/doc/tasks/delete-task-77179
   * @param {number} task_id
   * @returns {Promise<HttpResponse<string>>}
   */
  delete(task_id: number): Promise<HttpResponse<string>> {
    const requestObj = {
      method: 'delete',
      url: `/task/${task_id}`,
    };
    return this._httpRequest<string>(requestObj);
  }

  /**
   * Returns the users task labels.
   * @see https://developers.podio.com/doc/tasks/get-labels-151534
   * @returns  {Promise<HttpResponse<LabelType[]>>}
   */

  getAllLabels(): Promise<HttpResponse<LabelType[]>> {
    const requestObj = {
      method: 'get',
      url: `/task/label/`,
    };
    return this._httpRequest<LabelType[]>(requestObj);
  }

  /**
   * Returns the task with the given id.
   * @see https://developers.podio.com/doc/tasks/get-task-22413
   * @param {number} task_id
   * @returns {Promise<HttpResponse<TaskType>>}
   */

  get(task_id: number): Promise<HttpResponse<TaskType>> {
    const requestObj = {
      method: 'get',
      url: `/task/${task_id}`,
    };
    return this._httpRequest<TaskType>(requestObj);
  }

  /**
   * Returns the total open tasks for the user on the reference.
   * @see https://developers.podio.com/doc/tasks/get-task-count-38316458
   * @param {string} ref_type
   * @param {number} ref_id
   * @returns {Promise<HttpResponse<TaskCountType>>}
   */

  countByRef(ref_type: string, ref_id: number): Promise<HttpResponse<TaskCountType>> {
    const requestObj = {
      method: 'get',
      url: `/task/${ref_type}/${ref_id}/count`,
    };
    return this._httpRequest<TaskCountType>(requestObj);
  }

  /**
   * Returns the task summary for the active user
   * @see https://developers.podio.com/doc/tasks/get-task-summary-1612017
   * @param {any} attributes
   * @returns {Promise<HttpResponse<TaskSummaryType>>}
   */

  getSummary(attributes: any = {}): Promise<HttpResponse<TaskSummaryType>> {
    const requestObj = {
      method: 'get',
      url: `/task/summary`,
      params: attributes,
    };
    return this._httpRequest<TaskSummaryType>(requestObj);
  }

  /**
   * Returns the task summary for the organization for the active user
   * @see https://developers.podio.com/doc/tasks/get-task-summary-for-organization-1612063
   * @param {number} org_id
   * @param {any} attributes
   * @returns {Promise<HttpResponse<TaskSummaryType>>}
   */

  getSummaryForOrg(org_id: number, attributes: any = {}): Promise<HttpResponse<TaskSummaryType>> {
    const requestObj = {
      method: 'get',
      url: `/task/org/${org_id}/summary`,
      params: attributes,
    };
    return this._httpRequest<TaskSummaryType>(requestObj);
  }

  /**
   * Returns the tasks summary for personal tasks and tasks on personal spaces and sub-orgs.
   * @see https://developers.podio.com/doc/tasks/get-task-summary-for-personal-1657217
   * @param {any} attributes
   * @returns {Promise<HttpResponse<TaskSummaryType>>}
   */

  getSummaryPersonal(attributes: any = {}): Promise<HttpResponse<TaskSummaryType>> {
    const requestObj = {
      method: 'get',
      url: `/task/personal/summary`,
      params: attributes,
    };
    return this._httpRequest<TaskSummaryType>(requestObj);
  }

  /**
   * Returns the task summary for the given reference object.
   * @see https://developers.podio.com/doc/tasks/get-task-summary-for-reference-1657980
   * @param {string} ref_type
   * @param {number} ref_id
   * @param {any} attributes
   * @returns
   */

  getSummaryForReference(
    ref_type: string,
    ref_id: number,
    attributes: any = {},
  ): Promise<HttpResponse<TaskSummaryType>> {
    const requestObj = {
      method: 'get',
      url: `/task/${ref_type}/${ref_id}/summary`,
      params: attributes,
    };
    return this._httpRequest<TaskSummaryType>(requestObj);
  }

  /**
   * Returns the task summary for the given space for the active user
   * @see https://developers.podio.com/doc/tasks/get-task-summary-for-space-1612130
   * @param {number} space_id
   * @param {any} attributes
   * @returns {Promise<HttpResponse<TaskSummaryType>> }
   */

  getSummaryForSpace(space_id: number, attributes: any = {}): Promise<HttpResponse<TaskSummaryType>> {
    const requestObj = {
      method: 'get',
      url: `/task/space/${space_id}/summary`,
      params: attributes,
    };
    return this._httpRequest<TaskSummaryType>(requestObj);
  }

  /**
   * Returns the total number of tasks for the given time. The valid values for time are: "overdue", "due", "today" and "all"
   * @see https://developers.podio.com/doc/tasks/get-task-totals-by-time-5435062
   * @param {string} time
   * @param {any} attributes
   * @returns
   */

  totalByTime(time: 'overdue' | 'due' | 'all' | 'today', attributes: any = {}): Promise<HttpResponse<TaskCountType>> {
    const requestObj = {
      method: 'get',
      url: `/task/total/${time}`,
      params: attributes,
    };
    return this._httpRequest<TaskCountType>(requestObj);
  }

  /**
   * Get the totals for the users active tasks.
   * @see https://developers.podio.com/doc/tasks/get-task-totals-v2-83590
   * @param attributes
   * @returns
   */

  total(attributes: any = {}): Promise<HttpResponse<TotalType>> {
    const requestObj = {
      method: 'get',
      url: `/task/total/`,
      params: attributes,
    };
    return this._httpRequest<TotalType>(requestObj);
  }

  /**
   * Returns a list of all tasks matching all given filters and grouped by the specified group.
   * @see https://developers.podio.com/doc/tasks/get-tasks-77949
   * @param {GetAllAttributes} attributes
   * @returns {Promise<HttpResponse<MiniTaskType[]>>}
   */

  getAll(attributes: GetAllAttributes): Promise<HttpResponse<MiniTaskType[]>> {
    const requestObj = {
      method: 'get',
      url: `/task/`,
      params: attributes,
    };
    return this._httpRequest<MiniTaskType[]>(requestObj);
  }

  /**
   * Mark the completed task as no longer being completed.
   * @see https://developers.podio.com/doc/tasks/incomplete-task-22433
   * @param {number} task_id
   * @param {boolean} silent
   * @param {boolean} hook
   * @returns {Promise<HttpResponse<string>>}
   */
  incomplete(task_id: number, silent: boolean = false, hook: boolean = true): Promise<HttpResponse<string>> {
    const requestObj = {
      method: 'post',
      url: `/task/${task_id}/incomplete?silent=${silent}&hook=${hook}`,
    };
    return this._httpRequest<string>(requestObj);
  }

  /**
   * Ranks the task in comparison to one or two other tasks.
   * @see https://developers.podio.com/doc/tasks/rank-task-81015
   * @param {number} task_id
   * @param {any} attributes
   * @returns {Promise<HttpResponse<string>>}
   */

  rank(task_id: number, attributes: any = {}): Promise<HttpResponse<string>> {
    const requestObj = {
      method: 'post',
      url: `/task/${task_id}/rank`,
      data: attributes,
    };
    return this._httpRequest<string>(requestObj);
  }

  /**
   * Deletes the reference on the task
   * @see https://developers.podio.com/doc/tasks/remove-task-reference-6146114
   * @param {number} task_id
   * @returns {Promise<HttpResponse<string>>}
   */

  deleteRef(task_id: number): Promise<HttpResponse<string>> {
    const requestObj = {
      method: 'delete',
      url: `/task/${task_id}/ref`,
    };
    return this._httpRequest<string>(requestObj);
  }

  /**
   * Updates the label with the given id
   * @see https://developers.podio.com/doc/tasks/update-label-151289
   * @param {number} label_id
   * @param {any} attributes
   * @returns {Promise<HttpResponse<string>>}
   */

  updateLabel(label_id: number, attributes: any = {}): Promise<HttpResponse<string>> {
    const requestObj = {
      method: 'put',
      url: `/task/label/${label_id}`,
      data: attributes,
    };
    return this._httpRequest<string>(requestObj);
  }

  /**
   * Updates the task with the given attributes. Any attributes not specified will remain unchanged.
   * @see https://developers.podio.com/doc/tasks/update-task-10583674
   * @param {number} task_id
   * @param {any} attributes
   * @param {boolean} silent
   * @param {boolean} hook
   * @returns {Promise<HttpResponse<TaskType>>}
   */

  update(
    task_id: number,
    attributes: any = {},
    silent: boolean = false,
    hook: boolean = true,
  ): Promise<HttpResponse<TaskType>> {
    const requestObj = {
      method: 'put',
      url: `/task/${task_id}?silent=${silent}&hook=${hook}`,
      data: attributes,
    };
    return this._httpRequest<TaskType>(requestObj);
  }

  /**
   * Updates the description of the task.
   * @see https://developers.podio.com/doc/tasks/update-task-description-76982
   * @param {number} task_id
   * @param {any} attributes
   * @param {boolean} silent
   * @param {boolean} hook
   * @returns {Promise<HttpResponse<string>>}
   */

  updateDescription(
    task_id: number,
    attributes: any = {},
    silent: boolean = false,
    hook: boolean = true,
  ): Promise<HttpResponse<string>> {
    const requestObj = {
      method: 'put',
      url: `/task/${task_id}/description?silent=${silent}&hook=${hook}`,
      data: attributes,
    };
    return this._httpRequest<string>(requestObj);
  }

  /**
   * Updates the due on property on the task
   * @see https://developers.podio.com/doc/tasks/update-task-due-on-3442633
   * @param {number} task_id
   * @param {any} attributes
   * @param {boolean} silent
   * @param {boolean} hook
   * @returns {Promise<HttpResponse<string>>}
   */

  updateDueOn(
    task_id: number,
    attributes: any = {},
    silent: boolean = false,
    hook: boolean = true,
  ): Promise<HttpResponse<string>> {
    const requestObj = {
      method: 'put',
      url: `/task/${task_id}/due?silent=${silent}&hook=${hook}`,
      data: attributes,
    };
    return this._httpRequest<string>(requestObj);
  }

  /**
   * Updates the task with new labels
   * @see https://developers.podio.com/doc/tasks/update-task-labels-151769
   * @param {number} task_id
   * @param {any} attributes
   * @returns {Promise<HttpResponse<string>>}
   */

  updateLabels(task_id: number, attributes: any = {}): Promise<HttpResponse<string>> {
    const requestObj = {
      method: 'put',
      url: `/task/${task_id}/label/`,
      data: attributes,
    };
    return this._httpRequest<string>(requestObj);
  }

  /**
   * Update the private flag on the given task.
   * @see https://developers.podio.com/doc/tasks/update-task-private-22434
   * @param {number} task_id
   * @param {any} attributes
   * @param {boolean} silent
   * @param {boolean} hook
   * @returns {Promise<HttpResponse<string>>}
   */

  updatePrivate(
    task_id: number,
    attributes: any = {},
    silent: boolean = false,
    hook: boolean = true,
  ): Promise<HttpResponse<string>> {
    const requestObj = {
      method: 'put',
      url: `/task/${task_id}/private?silent=${silent}&hook=${hook}`,
      data: attributes,
    };
    return this._httpRequest<string>(requestObj);
  }

  /**
   * Attached this task to an object. If the task is already attached to an object, it will be detached from that object and reattached on the new object.
   * @see https://developers.podio.com/doc/tasks/update-task-reference-170733
   * @param {number} task_id
   * @param {any} attributes
   * @param {boolean} silent
   * @param {boolean} hook
   * @returns {Promise<HttpResponse<string>>}
   */

  updateReference(
    task_id: number,
    attributes: any = {},
    silent: boolean = false,
    hook: boolean = true,
  ): Promise<HttpResponse<string>> {
    const requestObj = {
      method: 'put',
      url: `/task/${task_id}/ref?silent=${silent}&hook=${hook}`,
      data: attributes,
    };
    return this._httpRequest<string>(requestObj);
  }

  /**
   * Updates the text of the task.
   * @see https://developers.podio.com/doc/tasks/update-task-text-22428
   * @param {number} task_id
   * @param {any} attributes
   * @param {boolean} silent
   * @param {boolean} hook
   * @returns {Promise<HttpResponse<string>>}
   */

  updateText(
    task_id: number,
    attributes: any = {},
    silent: boolean = false,
    hook: boolean = true,
  ): Promise<HttpResponse<string>> {
    const requestObj = {
      method: 'put',
      url: `/task/${task_id}/text?silent=${silent}&hook=${hook}`,
      data: attributes,
    };
    return this._httpRequest<string>(requestObj);
  }
}

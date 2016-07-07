declare namespace AppVars {
  export interface TristId {
      uid: string
      filename:string
  }

  export const mobileEditUpdate: (trystup: string) => {
      type: string;
      trystup: string;
  };
  export const copySelection: (tristId: TristId, clipPusher: Function) => {
      type: string;
      tristId: TristId;
      clipPusher: Function;
  };
  export const setEditorState: (editorState: any) => {
      type: string;
      editorState: any;
  };

  export const lineEdit: (tristId: TristId, trystup: string) => {};
  export const doSomething: () => {};
  export const editorUndo: () => {};
  export const editorRedo: () => {};
  export const toggleStyle: (style: boolean) => {};
  export const setStyle: (style: boolean) => {};
  export const addInlineLink: (url: string) => {};
  export const addField: (formula: string) => {};
  export const setLineContent: (tristId: TristId) => {};
  export const untouchTrist: (tristId: TristId) => {};
  export const clearFormatting: (tristId: TristId) => {};
  export const showFormatbar: (tristId: TristId) => {};
  export const hideFormatbar: (tristId: TristId) => {};
  export const showArrangebar: (tristId: TristId) => {};
  export const hideArrangebar: (tristId: TristId) => {};
  export const lineJoin: (tristId: TristId) => {};
  export const lineSplit: (tristId: TristId) => {};
  export const blur: (tristId: TristId) => {};
  export const deleteSelection: (tristId: TristId) => {};
  export const extendDown: (tristId: TristId) => {};
  export const extendUp: (tristId: TristId) => {};
  export const undo: (tristId: TristId) => {};
  export const redo: (tristId: TristId) => {};
  export const lineUp: (tristId: TristId) => {};
  export const lineDown: (tristId: TristId) => {};
  export const lineHome: (tristId: TristId) => {};
  export const lineEnd: (tristId: TristId) => {};
  export const lineLeft: (tristId: TristId) => {};
  export const lineRight: (tristId: TristId) => {};
  export const lineOpen: (tristId: TristId) => {};
  export const lineClose: (tristId: TristId) => {};
  export const moveUp: (tristId: TristId) => {};
  export const moveDown: (tristId: TristId) => {};
  export const moveLeft: (tristId: TristId) => {};
  export const moveRight: (tristId: TristId) => {};
  export const lineEditEnd: (tristId: TristId) => {};
  export const insertLine: (tristId: TristId) => {};
  export const setImage: (tristId: TristId, image: string) => {};
  export const setImageIndex: (tristId: TristId, imageIndex: number) => {};
  export const setFocusToLine: (tristId: TristId, focusId: string) => {};
  export const setLineFormat: (tristId: TristId, edits: any) => {};
  export const setBISU: (tristId: TristId, bisu: string, value: boolean) => {};
  export const setSize: (tristId: TristId, size: number) => {};
  export const setFace: (tristId: TristId, face: number) => {};
  export const setColors: (tristId: TristId, colors: any) => {};
  export const setFG: (tristId: TristId, fg: number) => {};
  export const setBG: (tristId: TristId, bg: number) => {};
  export const addLine: (tristId: TristId, relativeLevel: number) => {};
  export const find: (tristId: TristId, searchUp: boolean, fromStart: boolean) => {};
  export const addImage: (tristId: TristId, imageUrl: string) => {};
  export const imageClicked: (tristId: TristId, direction?: string) => {};
  export const pasteTrist: (tristId: TristId, clip: any) => {};
  export const replaceTrist: (tristId: TristId, trist: any) => {};
  export const refreshVTrist: (tristId: TristId) => {};
  export const setPubTitle: (tristId: TristId, title: string) => {
      type: string;
      tristId: TristId;
      title: string;
  };
  export const showFindbar: () => {
      type: string;
  };
  export const hideFindbar: () => {
      type: string;
  };
  export const hideSnackbar: () => {
      type: string;
  };
  export const showSnackbar: (message: string) => {
      type: string;
      message: string;
  };
  export const setFindExp: (searchTerm: string) => {
      type: string;
      searchTerm: string;
  };
  export const setUsername: (username: string) => {
      type: string;
      username: string;
  };
  export const setSubscriptions: (subscriptions: any[]) => {
      type: string;
      subscriptions: any[];
  };
  export const setTimeline: (timeline: any[]) => {
      type: string;
      timeline: any[];
  };
  export const setPublished: (published: boolean) => {
      type: string;
      published: boolean;
  };
  export const setPartialKey: (keyCode: any) => {
      type: string;
      keyCode: any;
  };
  export const showTimeline: () => {
      type: string;
  };
  export const showFilePicker: () => {
      type: string;
  };
  export const setFilesList: (tristrefs: any[]) => {
      type: string;
      tristrefs: any[];
  };
  export const showLeftNav: () => {
      type: string;
  };
  export const hideLeftNav: () => {
      type: string;
  };
  export const setInitialState: (initialState: any) => {
      type: string;
      initialState: any;
  };
  export const appendVTrist: (trist: any, tristId: TristId, isEditable: boolean) => {
      type: string;
      trist: any;
      tristId: TristId;
      isEditable: boolean;
  };
  export const activateVTrist: (tristIndex: number) => {
      type: string;
      tristIndex: number;
  };
  export const closeVTrist: (tristId: TristId) => {
      type: string;
      tristId: TristId;
  };
  export const ajaxLoadTristStart: (tristId: TristId) => {
      type: string;
      tristId: TristId;
  };
  export const ajaxLoadTristEnd: (tristId: TristId) => {
      type: string;
      tristId: TristId;
  };
  export const ajaxLoadTristError: (tristId: TristId) => {
      type: string;
      tristId: TristId;
  };
  export const dlgFindShow: (tristId: TristId) => {
      type: string;
      tristId: TristId;
  };
  export const dlgFindUpdate: (searchTerm: string) => {
      type: string;
      searchTerm: string;
  };
  export const dlgFindCancel: () => {
      type: string;
  };
  export const dlgUsernameShow: (username: string) => {
      type: string;
      username: string;
  };
  export const dlgUsernameCancel: () => {
      type: string;
  };
  export const dlgUsernameUpdate: (username: string) => {
      type: string;
      username: string;
  };
  export const dlgFilenameShow: () => {
      type: string;
  };
  export const dlgFilenameCancel: () => {
      type: string;
  };
  export const dlgFilenameUpdate: (filename: string) => {
      type: string;
      filename: string;
  };
  export const dlgOpenfileShow: () => {
      type: string;
  };
  export const dlgOpenfileCancel: () => {
      type: string;
  };
  export const dlgOpenfileUpdate: (owner: string) => {
      type: string;
      owner: string;
  };
  export const dlgShareShow: (tristId: TristId) => {
      type: string;
      tristId: TristId;
  };
  export const dlgShareCancel: () => {
      type: string;
  };
  export const dlgShareUpdate: (tristId: TristId, subscriber: string, permission: string) => {
      type: string;
      subscriber: string;
      permission: string;
      tristId: TristId;
  };
  export const dlgPublishShow: (tristId: TristId, title: string) => {
      type: string;
      tristId: TristId;
      title: string;
  };
  export const dlgPublishCancel: () => {
      type: string;
  };
  export const dlgPublishUpdate: (tristId: TristId, title: string) => {
      type: string;
      title: string;
      tristId: TristId;
  };
}
declare module "@trystal/actions" { export = AppVars }
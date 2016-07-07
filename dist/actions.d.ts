declare namespace AppVars {
  export const mobileEditUpdate: (trystup: any) => {
      type: string;
      trystup: any;
  };
  export const copySelection: (tristId: any, clipPusher: any) => {
      type: string;
      tristId: any;
      clipPusher: any;
  };
  export const setEditorState: (editorState: any) => {
      type: string;
      editorState: any;
  };

  export const lineEdit: (tristId: any, trystup: any) => {};
  export const doSomething: () => {};
  export const editorUndo: () => {};
  export const editorRedo: () => {};
  export const toggleStyle: (style: any) => {};
  export const setStyle: (style: any) => {};
  export const addInlineLink: (url: any) => {};
  export const addField: (formula: any) => {};
  export const setLineContent: (tristId: any) => {};
  export const untouchTrist: (tristId: any) => {};
  export const clearFormatting: (tristId: any) => {};
  export const showFormatbar: (tristId: any) => {};
  export const hideFormatbar: (tristId: any) => {};
  export const showArrangebar: (tristId: any) => {};
  export const hideArrangebar: (tristId: any) => {};
  export const lineJoin: (tristId: any) => {};
  export const lineSplit: (tristId: any) => {};
  export const blur: (tristId: any) => {};
  export const deleteSelection: (tristId: any) => {};
  export const extendDown: (tristId: any) => {};
  export const extendUp: (tristId: any) => {};
  export const undo: (tristId: any) => {};
  export const redo: (tristId: any) => {};
  export const lineUp: (tristId: any) => {};
  export const lineDown: (tristId: any) => {};
  export const lineHome: (tristId: any) => {};
  export const lineEnd: (tristId: any) => {};
  export const lineLeft: (tristId: any) => {};
  export const lineRight: (tristId: any) => {};
  export const lineOpen: (tristId: any) => {};
  export const lineClose: (tristId: any) => {};
  export const moveUp: (tristId: any) => {};
  export const moveDown: (tristId: any) => {};
  export const moveLeft: (tristId: any) => {};
  export const moveRight: (tristId: any) => {};
  export const lineEditEnd: (tristId: any) => {};
  export const insertLine: (tristId: any) => {};
  export const setImage: (tristId: any, image: any) => {};
  export const setImageIndex: (tristId: any, imageIndex: any) => {};
  export const setFocusToLine: (tristId: any, focusId: any) => {};
  export const setLineFormat: (tristId: any, edits: any) => {};
  export const setBISU: (tristId: any, bisu: any, value: any) => {};
  export const setSize: (tristId: any, size: any) => {};
  export const setFace: (tristId: any, face: any) => {};
  export const setColors: (tristId: any, colors: any) => {};
  export const setFG: (tristId: any, fg: any) => {};
  export const setBG: (tristId: any, bg: any) => {};
  export const addLine: (tristId: any, relativeLevel: any) => {};
  export const find: (tristId: any, searchUp: any, fromStart: any) => {};
  export const addImage: (tristId: any, imageUrl: any) => {};
  export const imageClicked: (tristId: any, direction?: string) => {};
  export const pasteTrist: (tristId: any, clip: any) => {};
  export const replaceTrist: (tristId: any, trist: any) => {};
  export const refreshVTrist: (tristId: any) => {};
  export const setPubTitle: (tristId: any, title: any) => {
      type: string;
      tristId: any;
      title: any;
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
  export const showSnackbar: (message: any) => {
      type: string;
      message: any;
  };
  export const setFindExp: (searchTerm: any) => {
      type: string;
      searchTerm: any;
  };
  export const setUsername: (username: any) => {
      type: string;
      username: any;
  };
  export const setSubscriptions: (subscriptions: any) => {
      type: string;
      subscriptions: any;
  };
  export const setTimeline: (timeline: any) => {
      type: string;
      timeline: any;
  };
  export const setPublished: (published: any) => {
      type: string;
      published: any;
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
  export const setFilesList: (tristrefs: any) => {
      type: string;
      tristrefs: any;
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
  export const appendVTrist: (trist: any, tristId: any, isEditable: any) => {
      type: string;
      trist: any;
      tristId: any;
      isEditable: any;
  };
  export const activateVTrist: (tristIndex: any) => {
      type: string;
      tristIndex: any;
  };
  export const closeVTrist: (tristId: any) => {
      type: string;
      tristId: any;
  };
  export const ajaxLoadTristStart: (tristId: any) => {
      type: string;
      tristId: any;
  };
  export const ajaxLoadTristEnd: (tristId: any) => {
      type: string;
      tristId: any;
  };
  export const ajaxLoadTristError: (tristId: any) => {
      type: string;
      tristId: any;
  };
  export const dlgFindShow: (tristId: any) => {
      type: string;
      tristId: any;
  };
  export const dlgFindUpdate: (searchTerm: any) => {
      type: string;
      searchTerm: any;
  };
  export const dlgFindCancel: () => {
      type: string;
  };
  export const dlgUsernameShow: (username: any) => {
      type: string;
      username: any;
  };
  export const dlgUsernameCancel: () => {
      type: string;
  };
  export const dlgUsernameUpdate: (username: any) => {
      type: string;
      username: any;
  };
  export const dlgFilenameShow: () => {
      type: string;
  };
  export const dlgFilenameCancel: () => {
      type: string;
  };
  export const dlgFilenameUpdate: (filename: any) => {
      type: string;
      filename: any;
  };
  export const dlgOpenfileShow: () => {
      type: string;
  };
  export const dlgOpenfileCancel: () => {
      type: string;
  };
  export const dlgOpenfileUpdate: (owner: any) => {
      type: string;
      owner: any;
  };
  export const dlgShareShow: (tristId: any) => {
      type: string;
      tristId: any;
  };
  export const dlgShareCancel: () => {
      type: string;
  };
  export const dlgShareUpdate: (tristId: any, subscriber: any, permission: any) => {
      type: string;
      subscriber: any;
      permission: any;
      tristId: any;
  };
  export const dlgPublishShow: (tristId: any, title: any) => {
      type: string;
      tristId: any;
      title: any;
  };
  export const dlgPublishCancel: () => {
      type: string;
  };
  export const dlgPublishUpdate: (tristId: any, title: any) => {
      type: string;
      title: any;
      tristId: any;
  };
}
declare module "@trystal/actions" { export = AppVars }
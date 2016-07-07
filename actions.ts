import { extend } from 'lodash';
// import { KeyCodes } from '../keys'
// import { Trist } from '../trist'
// import { Line } from '../line'
// import { Family, Perms } from '../constants'

// export function onCopyLines(focusId:string)        { return { type: 'LINES_COPIED',  focusId }}
// export function dlgMyfilesShow()                   { return { type: 'DLG_FILENAME_SHOW' } }
// export function dlgMyfilesCancel()                 { return { type: 'DLG_FILENAME_CANCEL' } }
// export function dlgMyfilesUpdate(filename:string)  { return { type: 'DLG_FIND_UPDATE', filename } }

interface TristId {
  uid:string
  filename:string
}

interface Trist {
    
}

function vtristAction(tristId:TristId, vtristActionType:string, action = {}) {
  return extend(action, { type: 'VTRIST_ACTION', tristId, vtristActionType });
}

function editorAction(editorActionType:string, action = {}) {
  return extend(action, { type: 'EDITOR_ACTION', editorActionType });
}

// WIP
export const mobileEditUpdate = (trystup:string) => ({ type: 'SET_MOBILEEDIT_UPDATE', trystup });

// --------------------
export const copySelection = (tristId:TristId, clipPusher:any) => ({ type: 'COPY_SELECTION', tristId, clipPusher });
export const setEditorState = (editorState:any) => ({ type: 'SET_EDIT_STATE', editorState });

export const lineEdit = (tristId:TristId, trystup:string) => vtristAction(tristId, 'EDIT', { trystup });
export const doSomething = () => editorAction('DO_SOMETHING');
export const editorUndo = () => editorAction('UNDO');
export const editorRedo = () => editorAction('REDO');
export const toggleStyle = (style:string) => editorAction('TOGGLE_STYLE', { style });
export const setStyle = (style:string) => editorAction('SET_STYLE', { style });
export const addInlineLink = (url:string) => editorAction('ADD_LINK', { url });
export const addField = (formula:string) => editorAction('ADD_FIELD', { formula });

export const setLineContent = (tristId:TristId) => vtristAction(tristId, 'SET_CONTENT');
export const untouchTrist = (tristId:TristId) => vtristAction(tristId, 'UNTOUCH');
export const clearFormatting = (tristId:TristId) => vtristAction(tristId, 'CLEAR_FORMATTING');

// vtrist actions
export const showFormatbar = (tristId:TristId) => vtristAction(tristId, 'SHOW_FORMATBAR');
export const hideFormatbar = (tristId:TristId) => vtristAction(tristId, 'HIDE_FORMATBAR');
export const showArrangebar = (tristId:TristId) => vtristAction(tristId, 'SHOW_ARRANGEBAR');
export const hideArrangebar = (tristId:TristId) => vtristAction(tristId, 'HIDE_ARRANGEBAR');

export const lineJoin = (tristId:TristId) => vtristAction(tristId, 'JOIN');
export const lineSplit = (tristId:TristId) => vtristAction(tristId, 'SPLIT');
export const blur = (tristId:TristId) => vtristAction(tristId, 'BLUR');
export const deleteSelection = (tristId:TristId) => vtristAction(tristId, 'DELETE_SELECTION');
export const extendDown = (tristId:TristId) => vtristAction(tristId, 'EXTEND_DOWN');
export const extendUp = (tristId:TristId) => vtristAction(tristId, 'EXTEND_UP');
export const undo = (tristId:TristId) => vtristAction(tristId, 'UNDO');
export const redo = (tristId:TristId) => vtristAction(tristId, 'REDO');
export const lineUp = (tristId:TristId) => vtristAction(tristId, 'UP');
export const lineDown = (tristId:TristId) => vtristAction(tristId, 'DOWN');
export const lineHome = (tristId:TristId) => vtristAction(tristId, 'HOME');
export const lineEnd = (tristId:TristId) => vtristAction(tristId, 'END');
export const lineLeft = (tristId:TristId) => vtristAction(tristId, 'LEFT');
export const lineRight = (tristId:TristId) => vtristAction(tristId, 'RIGHT');
export const lineOpen = (tristId:TristId) => vtristAction(tristId, 'OPEN');
export const lineClose = (tristId:TristId) => vtristAction(tristId, 'CLOSE');
export const moveUp = (tristId:TristId) => vtristAction(tristId, 'MOVE_UP');
export const moveDown = (tristId:TristId) => vtristAction(tristId, 'MOVE_DOWN');
export const moveLeft = (tristId:TristId) => vtristAction(tristId, 'MOVE_LEFT');
export const moveRight = (tristId:TristId) => vtristAction(tristId, 'MOVE_RIGHT');
export const lineEditEnd = (tristId:TristId) => vtristAction(tristId, 'EDIT_END');
export const insertLine = (tristId:TristId) => vtristAction(tristId, 'INSERTLINE');
export const setImage = (tristId:TristId, image:any) => vtristAction(tristId, 'SET_IMAGE', { image });
export const setImageIndex = (tristId:TristId, imageIndex:number) => vtristAction(tristId, 'SET_IMAGEINDEX', { imageIndex });
export const setFocusToLine = (tristId:TristId, focusId:string) => vtristAction(tristId, 'SET_FOCUS', { focusId });
export const setLineFormat = (tristId:TristId, edits:any) => vtristAction(tristId, 'SET_FORMAT', { edits });
export const setBISU = (tristId:TristId, bisu:string, value:boolean) => vtristAction(tristId, 'SET_BISU', { bisu, value });
export const setSize = (tristId:TristId, size:number) => vtristAction(tristId, 'SET_SIZE', { size });
export const setFace = (tristId:TristId, face:number) => vtristAction(tristId, 'SET_FACE', { face });
export const setColors = (tristId:TristId, colors:any) => vtristAction(tristId, 'SET_COLORS', { colors }); // {fg:3, bg:3}
export const setFG = (tristId:TristId, fg:number) => vtristAction(tristId, 'SET_FG', { fg });
export const setBG = (tristId:TristId, bg:number) => vtristAction(tristId, 'SET_BG', { bg });
export const addLine = (tristId:TristId, relativeLevel:number) => vtristAction(tristId, 'ADDLINE', { relativeLevel });
export const find = (tristId:TristId, searchUp:boolean, fromStart:boolean) => vtristAction(tristId, 'FIND', { searchUp, fromStart });
export const addImage = (tristId:TristId, imageUrl:string) => vtristAction(tristId, 'ADD_IMAGE', { imageUrl });
export const imageClicked = (tristId:TristId, direction = 'FORWARD') => vtristAction(tristId, 'IMAGE_CLICKED', { direction });

export const pasteTrist = (tristId:TristId, clip:any) => vtristAction(tristId, 'PASTE_TRIST', { clip });
export const replaceTrist = (tristId:TristId, trist:any) => vtristAction(tristId, 'REPLACE_TRIST', { trist });
export const refreshVTrist = (tristId:TristId) => vtristAction(tristId, 'REFRESH_VTRIST');

// other actions

export const setPubTitle = (tristId:TristId, title:string) => ({ type: 'SET_PUBTITLE', tristId, title });

export const showFindbar      = () => ({ type: 'FINDBAR_SHOW' });
export const hideFindbar      = () => ({ type: 'FINDBAR_HIDE' });
export const hideSnackbar     = () => ({ type: 'HIDE_SNACK' });
export const showSnackbar     = (message:string) => ({ type: 'SHOW_SNACK', message });
export const setFindExp       = (searchTerm:string) => ({ type: 'SET_FINDEXP', searchTerm }); // mobile
export const setUsername      = (username:string) => ({ type: 'SET_USERNAME', username });
export const setSubscriptions = (subscriptions:any[]) => ({ type: 'SET_SUBSCRIPTIONS', subscriptions });
export const setTimeline      = (timeline:any[]) => ({ type: 'SET_TIMELINE', timeline });
export const setPublished     = (published:boolean) => ({ type: 'SET_PUBLISHED', published });
export const setPartialKey    = (keyCode:string) => ({ type: 'SET_PARTIALKEY', keyCode });
export const showTimeline     = () => ({ type: 'SHOW_TIMELINE' });
export const showFilePicker   = () => ({ type: 'FILEPICKER_SHOW' });
export const setFilesList     = (tristrefs:any[]) => ({ type: 'SET_FILESLIST', tristrefs });

export const showLeftNav = () => ({ type: 'LEFTNAV_SHOW' });
export const hideLeftNav = () => ({ type: 'LEFTNAV_HIDE' });
export const setInitialState = (initialState:any) => ({ type: 'SET_INITIALSTATE', initialState });

export const appendVTrist = (trist:any, tristId:TristId, isEditable:boolean) => ({ type: 'APPEND_VTRIST', trist, tristId, isEditable });

export const activateVTrist = (tristIndex:number) => ({ type: 'ACTIVATE_VTRIST', tristIndex });
export const closeVTrist = (tristId:TristId) => ({ type: 'CLOSE_VTRIST', tristId });

export const ajaxLoadTristStart = (tristId:TristId) => ({ type: 'TRIST_LOAD_START', tristId });
export const ajaxLoadTristEnd = (tristId:TristId) => ({ type: 'TRIST_LOAD_END', tristId });
export const ajaxLoadTristError = (tristId:TristId) => ({ type: 'TRIST_LOAD_ERROR', tristId });

export const dlgFindShow = (tristId:TristId) => ({ type: 'DLG_FIND_SHOW', tristId });
export const dlgFindUpdate = (searchTerm:string) => ({ type: 'DLG_FIND_UPDATE', searchTerm });
export const dlgFindCancel = () => ({ type: 'DLG_FIND_CANCEL' });

export const dlgUsernameShow = (username:string) => ({ type: 'DLG_USERNAME_SHOW', username });
export const dlgUsernameCancel = () => ({ type: 'DLG_USERNAME_CANCEL' });
export const dlgUsernameUpdate = (username:string) => ({ type: 'DLG_USERNAME_UPDATE', username });

export const dlgFilenameShow = () => ({ type: 'DLG_FILENAME_SHOW' });
export const dlgFilenameCancel = () => ({ type: 'DLG_FILENAME_CANCEL' });
export const dlgFilenameUpdate = (filename:string) => ({ type: 'DLG_FILENAME_UPDATE', filename });

export const dlgOpenfileShow = () => ({ type: 'DLG_OPENFILE_SHOW' });
export const dlgOpenfileCancel = () => ({ type: 'DLG_OPENFILE_CANCEL' });
export const dlgOpenfileUpdate = (owner:string) => ({ type: 'DLG_OPENFILE_UPDATE', owner });

export const dlgShareShow = (tristId:TristId) => ({ type: 'DLG_SHARE_SHOW', tristId });
export const dlgShareCancel = () => ({ type: 'DLG_SHARE_CANCEL' });
export const dlgShareUpdate = (tristId:TristId, subscriber:string, permission:string) => ({ type: 'DLG_SHARE_UPDATE', subscriber, permission, tristId });

export const dlgPublishShow = (tristId:TristId, title:string) => ({ type: 'DLG_PUBLISH_SHOW', tristId, title });
export const dlgPublishCancel = () => ({ type: 'DLG_PUBLISH_CANCEL' });
export const dlgPublishUpdate = (tristId:TristId, title:string) => ({ type: 'DLG_PUBLISH_UPDATE', title, tristId });
import { extend } from 'lodash';
// import { KeyCodes } from '../keys'
// import { Trist } from '../trist'
// import { Line } from '../line'
// import { Family, Perms } from '../constants'

// export function onCopyLines(focusId:string)        { return { type: 'LINES_COPIED',  focusId }}
// export function dlgMyfilesShow()                   { return { type: 'DLG_FILENAME_SHOW' } }
// export function dlgMyfilesCancel()                 { return { type: 'DLG_FILENAME_CANCEL' } }
// export function dlgMyfilesUpdate(filename:string)  { return { type: 'DLG_FIND_UPDATE', filename } }

function vtristAction(tristId, vtristActionType, action = {}) {
  return extend(action, { type: 'VTRIST_ACTION', tristId, vtristActionType });
}

function editorAction(editorActionType, action = {}) {
  return extend(action, { type: 'EDITOR_ACTION', editorActionType });
}

console.log('actions.ts v1.0.4')

// WIP
export const mobileEditUpdate = trystup => ({ type: 'SET_MOBILEEDIT_UPDATE', trystup });

// --------------------
export const copySelection = (tristId, clipPusher) => ({ type: 'COPY_SELECTION', tristId, clipPusher });
export const setEditorState = editorState => ({ type: 'SET_EDIT_STATE', editorState });

export const lineEdit = (tristId, trystup) => vtristAction(tristId, 'EDIT', { trystup });
export const doSomething = () => editorAction('DO_SOMETHING');
export const editorUndo = () => editorAction('UNDO');
export const editorRedo = () => editorAction('REDO');
export const toggleStyle = style => editorAction('TOGGLE_STYLE', { style });
export const setStyle = style => editorAction('SET_STYLE', { style });
export const addInlineLink = url => editorAction('ADD_LINK', { url });
export const addField = formula => editorAction('ADD_FIELD', { formula });

export const setLineContent = tristId => vtristAction(tristId, 'SET_CONTENT');
export const untouchTrist = tristId => vtristAction(tristId, 'UNTOUCH');
export const clearFormatting = tristId => vtristAction(tristId, 'CLEAR_FORMATTING');

// vtrist actions
export const showFormatbar = tristId => vtristAction(tristId, 'SHOW_FORMATBAR');
export const hideFormatbar = tristId => vtristAction(tristId, 'HIDE_FORMATBAR');
export const showArrangebar = tristId => vtristAction(tristId, 'SHOW_ARRANGEBAR');
export const hideArrangebar = tristId => vtristAction(tristId, 'HIDE_ARRANGEBAR');

export const lineJoin = tristId => vtristAction(tristId, 'JOIN');
export const lineSplit = tristId => vtristAction(tristId, 'SPLIT');
export const blur = tristId => vtristAction(tristId, 'BLUR');
export const deleteSelection = tristId => vtristAction(tristId, 'DELETE_SELECTION');
export const extendDown = tristId => vtristAction(tristId, 'EXTEND_DOWN');
export const extendUp = tristId => vtristAction(tristId, 'EXTEND_UP');
export const undo = tristId => vtristAction(tristId, 'UNDO');
export const redo = tristId => vtristAction(tristId, 'REDO');
export const lineUp = tristId => vtristAction(tristId, 'UP');
export const lineDown = tristId => vtristAction(tristId, 'DOWN');
export const lineHome = tristId => vtristAction(tristId, 'HOME');
export const lineEnd = tristId => vtristAction(tristId, 'END');
export const lineLeft = tristId => vtristAction(tristId, 'LEFT');
export const lineRight = tristId => vtristAction(tristId, 'RIGHT');
export const lineOpen = tristId => vtristAction(tristId, 'OPEN');
export const lineClose = tristId => vtristAction(tristId, 'CLOSE');
export const moveUp = tristId => vtristAction(tristId, 'MOVE_UP');
export const moveDown = tristId => vtristAction(tristId, 'MOVE_DOWN');
export const moveLeft = tristId => vtristAction(tristId, 'MOVE_LEFT');
export const moveRight = tristId => vtristAction(tristId, 'MOVE_RIGHT');
export const lineEditEnd = tristId => vtristAction(tristId, 'EDIT_END');
export const insertLine = tristId => vtristAction(tristId, 'INSERTLINE');
export const setImage = (tristId, image) => vtristAction(tristId, 'SET_IMAGE', { image });
export const setImageIndex = (tristId, imageIndex) => vtristAction(tristId, 'SET_IMAGEINDEX', { imageIndex });
export const setFocusToLine = (tristId, focusId) => vtristAction(tristId, 'SET_FOCUS', { focusId });
export const setLineFormat = (tristId, edits) => vtristAction(tristId, 'SET_FORMAT', { edits });
export const setBISU = (tristId, bisu, value) => vtristAction(tristId, 'SET_BISU', { bisu, value });
export const setSize = (tristId, size) => vtristAction(tristId, 'SET_SIZE', { size });
export const setFace = (tristId, face) => vtristAction(tristId, 'SET_FACE', { face });
export const setColors = (tristId, colors) => vtristAction(tristId, 'SET_COLORS', { colors }); // {fg:3, bg:3}
export const setFG = (tristId, fg) => vtristAction(tristId, 'SET_FG', { fg });
export const setBG = (tristId, bg) => vtristAction(tristId, 'SET_BG', { bg });
export const addLine = (tristId, relativeLevel) => vtristAction(tristId, 'ADDLINE', { relativeLevel });
export const find = (tristId, searchUp, fromStart) => vtristAction(tristId, 'FIND', { searchUp, fromStart });
export const addImage = (tristId, imageUrl) => vtristAction(tristId, 'ADD_IMAGE', { imageUrl });
export const imageClicked = (tristId, direction = 'FORWARD') => vtristAction(tristId, 'IMAGE_CLICKED', { direction });

export const pasteTrist = (tristId, clip) => vtristAction(tristId, 'PASTE_TRIST', { clip });
export const replaceTrist = (tristId, trist) => vtristAction(tristId, 'REPLACE_TRIST', { trist });
export const refreshVTrist = tristId => vtristAction(tristId, 'REFRESH_VTRIST');

// other actions

export const setPubTitle = (tristId, title) => ({ type: 'SET_PUBTITLE', tristId, title });

export const showFindbar = () => ({ type: 'FINDBAR_SHOW' });
export const hideFindbar = () => ({ type: 'FINDBAR_HIDE' });
export const hideSnackbar = () => ({ type: 'HIDE_SNACK' });
export const showSnackbar = message => ({ type: 'SHOW_SNACK', message });
export const setFindExp = searchTerm => ({ type: 'SET_FINDEXP', searchTerm }); // mobile
export const setUsername = username => ({ type: 'SET_USERNAME', username });
export const setSubscriptions = subscriptions => ({ type: 'SET_SUBSCRIPTIONS', subscriptions });
export const setTimeline = timeline => ({ type: 'SET_TIMELINE', timeline });
export const setPublished = published => ({ type: 'SET_PUBLISHED', published });
export const setPartialKey = keyCode => ({ type: 'SET_PARTIALKEY', keyCode });
export const showTimeline = () => ({ type: 'SHOW_TIMELINE' });
export const showFilePicker = () => ({ type: 'FILEPICKER_SHOW' });
export const setFilesList = tristrefs => ({ type: 'SET_FILESLIST', tristrefs });

export const showLeftNav = () => ({ type: 'LEFTNAV_SHOW' });
export const hideLeftNav = () => ({ type: 'LEFTNAV_HIDE' });
export const setInitialState = initialState => ({ type: 'SET_INITIALSTATE', initialState });

export const appendVTrist = (trist, tristId, isEditable) => ({ type: 'APPEND_VTRIST', trist, tristId, isEditable });

export const activateVTrist = tristIndex => ({ type: 'ACTIVATE_VTRIST', tristIndex });
export const closeVTrist = tristId => ({ type: 'CLOSE_VTRIST', tristId });

export const ajaxLoadTristStart = tristId => ({ type: 'TRIST_LOAD_START', tristId });
export const ajaxLoadTristEnd = tristId => ({ type: 'TRIST_LOAD_END', tristId });
export const ajaxLoadTristError = tristId => ({ type: 'TRIST_LOAD_ERROR', tristId });

export const dlgFindShow = tristId => ({ type: 'DLG_FIND_SHOW', tristId });
export const dlgFindUpdate = searchTerm => ({ type: 'DLG_FIND_UPDATE', searchTerm });
export const dlgFindCancel = () => ({ type: 'DLG_FIND_CANCEL' });

export const dlgUsernameShow = username => ({ type: 'DLG_USERNAME_SHOW', username });
export const dlgUsernameCancel = () => ({ type: 'DLG_USERNAME_CANCEL' });
export const dlgUsernameUpdate = username => ({ type: 'DLG_USERNAME_UPDATE', username });

export const dlgFilenameShow = () => ({ type: 'DLG_FILENAME_SHOW' });
export const dlgFilenameCancel = () => ({ type: 'DLG_FILENAME_CANCEL' });
export const dlgFilenameUpdate = filename => ({ type: 'DLG_FILENAME_UPDATE', filename });

export const dlgOpenfileShow = () => ({ type: 'DLG_OPENFILE_SHOW' });
export const dlgOpenfileCancel = () => ({ type: 'DLG_OPENFILE_CANCEL' });
export const dlgOpenfileUpdate = owner => ({ type: 'DLG_OPENFILE_UPDATE', owner });

export const dlgShareShow = tristId => ({ type: 'DLG_SHARE_SHOW', tristId });
export const dlgShareCancel = () => ({ type: 'DLG_SHARE_CANCEL' });
export const dlgShareUpdate = (tristId, subscriber, permission) => ({ type: 'DLG_SHARE_UPDATE', subscriber, permission, tristId });

export const dlgPublishShow = (tristId, title) => ({ type: 'DLG_PUBLISH_SHOW', tristId, title });
export const dlgPublishCancel = () => ({ type: 'DLG_PUBLISH_CANCEL' });
export const dlgPublishUpdate = (tristId, title) => ({ type: 'DLG_PUBLISH_UPDATE', title, tristId });
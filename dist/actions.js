"use strict";
var lodash_1 = require('lodash');
// import { KeyCodes } from '../keys'
// import { Trist } from '../trist'
// import { Line } from '../line'
// import { Family, Perms } from '../constants'
// export function onCopyLines(focusId:string)        { return { type: 'LINES_COPIED',  focusId }}
// export function dlgMyfilesShow()                   { return { type: 'DLG_FILENAME_SHOW' } }
// export function dlgMyfilesCancel()                 { return { type: 'DLG_FILENAME_CANCEL' } }
// export function dlgMyfilesUpdate(filename:string)  { return { type: 'DLG_FIND_UPDATE', filename } }
function vtristAction(tristId, vtristActionType, action) {
    if (action === void 0) { action = {}; }
    return lodash_1.extend(action, { type: 'VTRIST_ACTION', tristId: tristId, vtristActionType: vtristActionType });
}
function editorAction(editorActionType, action) {
    if (action === void 0) { action = {}; }
    return lodash_1.extend(action, { type: 'EDITOR_ACTION', editorActionType: editorActionType });
}
console.log('actions.ts v1.0.4');
// WIP
exports.mobileEditUpdate = function (trystup) { return ({ type: 'SET_MOBILEEDIT_UPDATE', trystup: trystup }); };
// --------------------
exports.copySelection = function (tristId, clipPusher) { return ({ type: 'COPY_SELECTION', tristId: tristId, clipPusher: clipPusher }); };
exports.setEditorState = function (editorState) { return ({ type: 'SET_EDIT_STATE', editorState: editorState }); };
exports.lineEdit = function (tristId, trystup) { return vtristAction(tristId, 'EDIT', { trystup: trystup }); };
exports.doSomething = function () { return editorAction('DO_SOMETHING'); };
exports.editorUndo = function () { return editorAction('UNDO'); };
exports.editorRedo = function () { return editorAction('REDO'); };
exports.toggleStyle = function (style) { return editorAction('TOGGLE_STYLE', { style: style }); };
exports.setStyle = function (style) { return editorAction('SET_STYLE', { style: style }); };
exports.addInlineLink = function (url) { return editorAction('ADD_LINK', { url: url }); };
exports.addField = function (formula) { return editorAction('ADD_FIELD', { formula: formula }); };
exports.setLineContent = function (tristId) { return vtristAction(tristId, 'SET_CONTENT'); };
exports.untouchTrist = function (tristId) { return vtristAction(tristId, 'UNTOUCH'); };
exports.clearFormatting = function (tristId) { return vtristAction(tristId, 'CLEAR_FORMATTING'); };
// vtrist actions
exports.showFormatbar = function (tristId) { return vtristAction(tristId, 'SHOW_FORMATBAR'); };
exports.hideFormatbar = function (tristId) { return vtristAction(tristId, 'HIDE_FORMATBAR'); };
exports.showArrangebar = function (tristId) { return vtristAction(tristId, 'SHOW_ARRANGEBAR'); };
exports.hideArrangebar = function (tristId) { return vtristAction(tristId, 'HIDE_ARRANGEBAR'); };
exports.lineJoin = function (tristId) { return vtristAction(tristId, 'JOIN'); };
exports.lineSplit = function (tristId) { return vtristAction(tristId, 'SPLIT'); };
exports.blur = function (tristId) { return vtristAction(tristId, 'BLUR'); };
exports.deleteSelection = function (tristId) { return vtristAction(tristId, 'DELETE_SELECTION'); };
exports.extendDown = function (tristId) { return vtristAction(tristId, 'EXTEND_DOWN'); };
exports.extendUp = function (tristId) { return vtristAction(tristId, 'EXTEND_UP'); };
exports.undo = function (tristId) { return vtristAction(tristId, 'UNDO'); };
exports.redo = function (tristId) { return vtristAction(tristId, 'REDO'); };
exports.lineUp = function (tristId) { return vtristAction(tristId, 'UP'); };
exports.lineDown = function (tristId) { return vtristAction(tristId, 'DOWN'); };
exports.lineHome = function (tristId) { return vtristAction(tristId, 'HOME'); };
exports.lineEnd = function (tristId) { return vtristAction(tristId, 'END'); };
exports.lineLeft = function (tristId) { return vtristAction(tristId, 'LEFT'); };
exports.lineRight = function (tristId) { return vtristAction(tristId, 'RIGHT'); };
exports.lineOpen = function (tristId) { return vtristAction(tristId, 'OPEN'); };
exports.lineClose = function (tristId) { return vtristAction(tristId, 'CLOSE'); };
exports.moveUp = function (tristId) { return vtristAction(tristId, 'MOVE_UP'); };
exports.moveDown = function (tristId) { return vtristAction(tristId, 'MOVE_DOWN'); };
exports.moveLeft = function (tristId) { return vtristAction(tristId, 'MOVE_LEFT'); };
exports.moveRight = function (tristId) { return vtristAction(tristId, 'MOVE_RIGHT'); };
exports.lineEditEnd = function (tristId) { return vtristAction(tristId, 'EDIT_END'); };
exports.insertLine = function (tristId) { return vtristAction(tristId, 'INSERTLINE'); };
exports.setImage = function (tristId, image) { return vtristAction(tristId, 'SET_IMAGE', { image: image }); };
exports.setImageIndex = function (tristId, imageIndex) { return vtristAction(tristId, 'SET_IMAGEINDEX', { imageIndex: imageIndex }); };
exports.setFocusToLine = function (tristId, focusId) { return vtristAction(tristId, 'SET_FOCUS', { focusId: focusId }); };
exports.setLineFormat = function (tristId, edits) { return vtristAction(tristId, 'SET_FORMAT', { edits: edits }); };
exports.setBISU = function (tristId, bisu, value) { return vtristAction(tristId, 'SET_BISU', { bisu: bisu, value: value }); };
exports.setSize = function (tristId, size) { return vtristAction(tristId, 'SET_SIZE', { size: size }); };
exports.setFace = function (tristId, face) { return vtristAction(tristId, 'SET_FACE', { face: face }); };
exports.setColors = function (tristId, colors) { return vtristAction(tristId, 'SET_COLORS', { colors: colors }); }; // {fg:3, bg:3}
exports.setFG = function (tristId, fg) { return vtristAction(tristId, 'SET_FG', { fg: fg }); };
exports.setBG = function (tristId, bg) { return vtristAction(tristId, 'SET_BG', { bg: bg }); };
exports.addLine = function (tristId, relativeLevel) { return vtristAction(tristId, 'ADDLINE', { relativeLevel: relativeLevel }); };
exports.find = function (tristId, searchUp, fromStart) { return vtristAction(tristId, 'FIND', { searchUp: searchUp, fromStart: fromStart }); };
exports.addImage = function (tristId, imageUrl) { return vtristAction(tristId, 'ADD_IMAGE', { imageUrl: imageUrl }); };
exports.imageClicked = function (tristId, direction) {
    if (direction === void 0) { direction = 'FORWARD'; }
    return vtristAction(tristId, 'IMAGE_CLICKED', { direction: direction });
};
exports.pasteTrist = function (tristId, clip) { return vtristAction(tristId, 'PASTE_TRIST', { clip: clip }); };
exports.replaceTrist = function (tristId, trist) { return vtristAction(tristId, 'REPLACE_TRIST', { trist: trist }); };
exports.refreshVTrist = function (tristId) { return vtristAction(tristId, 'REFRESH_VTRIST'); };
// other actions
exports.setPubTitle = function (tristId, title) { return ({ type: 'SET_PUBTITLE', tristId: tristId, title: title }); };
exports.showFindbar = function () { return ({ type: 'FINDBAR_SHOW' }); };
exports.hideFindbar = function () { return ({ type: 'FINDBAR_HIDE' }); };
exports.hideSnackbar = function () { return ({ type: 'HIDE_SNACK' }); };
exports.showSnackbar = function (message) { return ({ type: 'SHOW_SNACK', message: message }); };
exports.setFindExp = function (searchTerm) { return ({ type: 'SET_FINDEXP', searchTerm: searchTerm }); }; // mobile
exports.setUsername = function (username) { return ({ type: 'SET_USERNAME', username: username }); };
exports.setSubscriptions = function (subscriptions) { return ({ type: 'SET_SUBSCRIPTIONS', subscriptions: subscriptions }); };
exports.setTimeline = function (timeline) { return ({ type: 'SET_TIMELINE', timeline: timeline }); };
exports.setPublished = function (published) { return ({ type: 'SET_PUBLISHED', published: published }); };
exports.setPartialKey = function (keyCode) { return ({ type: 'SET_PARTIALKEY', keyCode: keyCode }); };
exports.showTimeline = function () { return ({ type: 'SHOW_TIMELINE' }); };
exports.showFilePicker = function () { return ({ type: 'FILEPICKER_SHOW' }); };
exports.setFilesList = function (tristrefs) { return ({ type: 'SET_FILESLIST', tristrefs: tristrefs }); };
exports.showLeftNav = function () { return ({ type: 'LEFTNAV_SHOW' }); };
exports.hideLeftNav = function () { return ({ type: 'LEFTNAV_HIDE' }); };
exports.setInitialState = function (initialState) { return ({ type: 'SET_INITIALSTATE', initialState: initialState }); };
exports.appendVTrist = function (trist, tristId, isEditable) { return ({ type: 'APPEND_VTRIST', trist: trist, tristId: tristId, isEditable: isEditable }); };
exports.activateVTrist = function (tristIndex) { return ({ type: 'ACTIVATE_VTRIST', tristIndex: tristIndex }); };
exports.closeVTrist = function (tristId) { return ({ type: 'CLOSE_VTRIST', tristId: tristId }); };
exports.ajaxLoadTristStart = function (tristId) { return ({ type: 'TRIST_LOAD_START', tristId: tristId }); };
exports.ajaxLoadTristEnd = function (tristId) { return ({ type: 'TRIST_LOAD_END', tristId: tristId }); };
exports.ajaxLoadTristError = function (tristId) { return ({ type: 'TRIST_LOAD_ERROR', tristId: tristId }); };
exports.dlgFindShow = function (tristId) { return ({ type: 'DLG_FIND_SHOW', tristId: tristId }); };
exports.dlgFindUpdate = function (searchTerm) { return ({ type: 'DLG_FIND_UPDATE', searchTerm: searchTerm }); };
exports.dlgFindCancel = function () { return ({ type: 'DLG_FIND_CANCEL' }); };
exports.dlgUsernameShow = function (username) { return ({ type: 'DLG_USERNAME_SHOW', username: username }); };
exports.dlgUsernameCancel = function () { return ({ type: 'DLG_USERNAME_CANCEL' }); };
exports.dlgUsernameUpdate = function (username) { return ({ type: 'DLG_USERNAME_UPDATE', username: username }); };
exports.dlgFilenameShow = function () { return ({ type: 'DLG_FILENAME_SHOW' }); };
exports.dlgFilenameCancel = function () { return ({ type: 'DLG_FILENAME_CANCEL' }); };
exports.dlgFilenameUpdate = function (filename) { return ({ type: 'DLG_FILENAME_UPDATE', filename: filename }); };
exports.dlgOpenfileShow = function () { return ({ type: 'DLG_OPENFILE_SHOW' }); };
exports.dlgOpenfileCancel = function () { return ({ type: 'DLG_OPENFILE_CANCEL' }); };
exports.dlgOpenfileUpdate = function (owner) { return ({ type: 'DLG_OPENFILE_UPDATE', owner: owner }); };
exports.dlgShareShow = function (tristId) { return ({ type: 'DLG_SHARE_SHOW', tristId: tristId }); };
exports.dlgShareCancel = function () { return ({ type: 'DLG_SHARE_CANCEL' }); };
exports.dlgShareUpdate = function (tristId, subscriber, permission) { return ({ type: 'DLG_SHARE_UPDATE', subscriber: subscriber, permission: permission, tristId: tristId }); };
exports.dlgPublishShow = function (tristId, title) { return ({ type: 'DLG_PUBLISH_SHOW', tristId: tristId, title: title }); };
exports.dlgPublishCancel = function () { return ({ type: 'DLG_PUBLISH_CANCEL' }); };
exports.dlgPublishUpdate = function (tristId, title) { return ({ type: 'DLG_PUBLISH_UPDATE', title: title, tristId: tristId }); };

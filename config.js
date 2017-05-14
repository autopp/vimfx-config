const gClipboardHelper = Components.classes["@mozilla.org/widget/clipboardhelper;1"].getService(Components.interfaces.nsIClipboardHelper);

vimfx.addCommand({
  name: 'copy_markdown',
  description: 'Copy as markdown link',
  category: 'location',
}, ({vim}) => {
  let url = vim.window.gBrowser.selectedBrowser.currentURI.spec
  let title = vim.window.gBrowser.selectedBrowser.contentTitle
  let fmt = "["+title+"]("+url+")"
  gClipboardHelper.copyString(fmt)
  vim.notify("Copied String: "+ fmt)
});

vimfx.addCommand({
  name: 'copy_url',
  description: 'Copy URL',
  category: 'location',
}, ({vim}) => {
  let url = vim.window.gBrowser.selectedBrowser.currentURI.spec
  let fmt = url
  vim.notify("Coping String: "+ fmt)
  gClipboardHelper.copyString(fmt)
  vim.notify("Copied String: "+ fmt)
});

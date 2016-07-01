function openInstallURL() {
  var url = 'itms-services://?action=download-manifest&url=https://jingmufengyu.github.io/jmfy/res/install_tmp.plist';
// var url = 'itms-services://?action=download-manifest&url=https://qzs21.github.io/iComic/res/install.plist';

  window.self.location = url;
}
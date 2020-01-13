const options = [
    "select_transDirect",
    "select_subType",
    "directTranslation",
    "select_audioApi"
]

function $(id) {
  return document.getElementById(id)
}

// 将选项保存在 chrome.storage 中。
function save_options() {
  var isAuto = $("auto_trs").checked,
      isAutoSWT = $("select_translate").checked,
      transDirect = $("select_transDirect").options.selectedIndex,
      subType = $("select_subType").options.selectedIndex,
      isDirectTranslate = $("directTranslation").checked,
      audioApi = $("select_audioApi").options.selectedIndex,
      audioSpeed = $("audioSpeed").value;
  chrome.storage.sync.set({
    isAutoTranslate: isAuto,
    isAutoSWT: isAutoSWT,
    transDirect: transDirect,
    subType: subType,
    isDirectTranslate: isDirectTranslate,
    audioApi: audioApi,
    audioSpeed: audioSpeed
  },
    function () {
      // 更新状态，告诉用户选项已保存。
      // console.log(isAuto, isAutoSWT, transDirect, subType, isDirectTranslate, audioApi);
      console.log('audio speed: ', audioSpeed);
    }
  );
}

// 从保存在 chrome.storage 中的首选项恢复选择框和复选框状态。
function restore_options() {
  // 使用默认值 color = 'red' 和 likesColor = true 。
  chrome.storage.sync.get(
    {
      isAutoTranslate: false,
      isAutoSWT: true,
      transDirect: 1,
      subType: 0,
      version: '',
      favoriteColor: "red",
      likesColor: true,
      isDirectTranslate: false,
      audioApi: 0,
      audioSpeed: 5
    },
    function (items) {
      console.log('items: ', items)
      $("auto_trs").checked = items.isAutoTranslate;
      if (items.isAutoTranslate) {
        chrome.browserAction.setBadgeText({text: "auto"});
        chrome.browserAction.setBadgeBackgroundColor({color: "#5ebb8d"});
      } else {
        chrome.browserAction.setBadgeText({text: ""});
      }
      $("select_translate").checked = items.isAutoSWT;
      $("directTranslation").checked = items.isDirectTranslate;
      $("select_transDirect").options.selectedIndex = items.transDirect;
      $("select_subType").options.selectedIndex = items.subType;
      $("select_audioApi").options.selectedIndex = items.audioApi;
      $("audioSpeed").value = items.audioSpeed;
      var manifestData = chrome.runtime.getManifest();
      $('version').innerText = manifestData.version
      if (items.version != manifestData.version) {
        chrome.storage.sync.set({
            version: manifestData.version
        })
        // openUpdateModal();
    }
    }
  );
}
document.addEventListener("DOMContentLoaded", () => {
  restore_options()
  setI18n()
});
$("auto_trs").addEventListener('change', () => {
  save_options()
  if($("auto_trs").checked) {
    chrome.browserAction.setBadgeText({text: "auto"});
    chrome.browserAction.setBadgeBackgroundColor({color: "#5ebb8d"});
    // chrome.browserAction.setIcon({path: 'images/logo-auto.png'});
    // console.log("auto");
  }
  else {
    chrome.browserAction.setBadgeText({text: ""});
  }
})
$("select_translate").addEventListener('change', () => {
  save_options();
  if($("select_translate").checked) {
    chrome.runtime.sendMessage({option: 'change'});
  }
})
options.forEach((option) => {
  $(option).addEventListener('change', () => {
      save_options()
  })
})
$("audioSpeed").addEventListener('change', () => {
  save_options()
})
function openUpdateModal() {
  var elems = $('update-modal');
  var modal = M.Modal.init(elems, {
  });
  modal.open();
}

function setI18n () {
  $('optionsAutoSWT').innerText = chrome.i18n.getMessage('optionsAutoSWT')
  $('optionsAutoWebTrs').innerText = chrome.i18n.getMessage('optionsAutoWebTrs')

  $('defaultTrsDirect').innerText = chrome.i18n.getMessage('defaultTrsDirect')
  $('transZh2En').innerText = chrome.i18n.getMessage('transZh2En')
  $('transEn2Zh').innerText = chrome.i18n.getMessage('transEn2Zh')
  $('transJp2Zh').innerText = chrome.i18n.getMessage('transJp2Zh')

  $('defaultSubtype').innerText = chrome.i18n.getMessage('defaultSubtype')
  $('optionBil').innerText = chrome.i18n.getMessage('optionBil')
  $('optionSource').innerText = chrome.i18n.getMessage('optionSource')
  $('optionTarget').innerText = chrome.i18n.getMessage('optionTarget')

  $('defaultAudioApi').innerText = chrome.i18n.getMessage('defaultAudioApi')
  $('youdao').innerText = chrome.i18n.getMessage('youdao')
  $('baidu').innerText = chrome.i18n.getMessage('baidu')

  $('readingSpeed').innerText = chrome.i18n.getMessage('readingSpeed')

  $('textDocTrs').innerText = chrome.i18n.getMessage('textDocTrs')
  $('UserCenter').innerText = chrome.i18n.getMessage('UserCenter')
  $('xiaoyiApp').innerText = chrome.i18n.getMessage('xiaoyiApp')
  $('feedback').innerText = chrome.i18n.getMessage('feedback')

  $('showDirectly').innerText = chrome.i18n.getMessage('showDirectly');
}

chrome.runtime.sendMessage({ type: 'optionsPageview' });

const options = [
    "select_transDirect",
    "select_subType",
    "directTranslation",
    "select_audioApi"
]

// function $(id) {
//   return document.getElementById(id)
// }

// 将选项保存在 chrome.storage 中。
function save_options() {
  // 保存前检查权限
  chrome.runtime.sendMessage({
    type: "checkPms"
  })   
  var isAuto = $("#auto_trs")[0].checked,
      isAutoSWT = $("#select_translate")[0].checked,
      transDirect = $("#select_transDirect")[0].options.selectedIndex,
      subType = $("#select_subType")[0].options.selectedIndex,
      isDirectTranslate = $("#directTranslation")[0].checked,
      audioApi = $("#select_audioApi")[0].options.selectedIndex,
      audioSpeed = $("#audioSpeed")[0].value;
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
      // console.log('audio speed: ', audioSpeed);
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
      targetBkgColor: "rgba(255, 255, 255, 0)",
      isDirectTranslate: false,
      audioApi: 0,
      audioSpeed: 5
    },
    function (items) {
      console.log('items: ', items)
      $("#auto_trs")[0].checked = items.isAutoTranslate;
      if (items.isAutoTranslate) {
        chrome.browserAction.setBadgeText({text: "auto"});
        chrome.browserAction.setBadgeBackgroundColor({color: "#5ebb8d"});
      } else {
        chrome.browserAction.setBadgeText({text: ""});
      }
      initSpectrum(items.targetBkgColor)
      $("#select_translate")[0].checked = items.isAutoSWT;
      $("#directTranslation")[0].checked = items.isDirectTranslate;
      $("#audioSpeed")[0].value = items.audioSpeed;
      $("#select_transDirect")[0].options.selectedIndex = items.transDirect;
      $("#select_subType")[0].options.selectedIndex = items.subType;
      $("#select_audioApi")[0].options.selectedIndex = items.audioApi;
      var manifestData = chrome.runtime.getManifest();
      $('#version').text(manifestData.version);
      if (items.version != manifestData.version) {
        chrome.storage.sync.set({
            version: manifestData.version
        })
        openUpdateModal();
      }
    }
  );
}
document.addEventListener("DOMContentLoaded", () => {
  restore_options()
  setI18n()
  
});
$("#auto_trs").change(() => {
  save_options()
  if($("#auto_trs")[0].checked) {
    chrome.browserAction.setBadgeText({text: "auto"});
    chrome.browserAction.setBadgeBackgroundColor({color: "#5ebb8d"});
    // chrome.browserAction.setIcon({path: 'images/logo-auto.png'});
    // console.log("auto");
  }
  else {
    chrome.browserAction.setBadgeText({text: ""});
  }
})
$("#select_translate").change(() => {
  save_options();
  if($("#select_translate")[0].checked) {
    chrome.runtime.sendMessage({option: 'change'});
  }
})
options.forEach((option) => {
  $("#" + option).change(() => {
      save_options()
  })
})
$("#audioSpeed").change(() => {
  save_options()
})
function initSpectrum(c) {
  $("#cyxy-colorpicker").spectrum({
        color: c,
        showAlpha: true,
        preferredFormat: "hex",
        showInput: true,
        // showPalette: true,
        change: function(color) {
            console.log(color, color.toRgbString()); // #ff0000
            var hex =  color.toRgbString();
            chrome.storage.sync.set({
              targetBkgColor: hex
            }, function () {
            }
        );
        }
  });
}
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

    var localization = $.spectrum.localization["zh-cn"] = {
        cancelText: "取消",
        chooseText: "选择",
        clearText: "清除",
        togglePaletteMoreText: "更多选项",
        togglePaletteLessText: "隐藏",
        noColorSelectedText: "尚未选择任何颜色"
    };

    $.extend($.fn.spectrum.defaults, localization);
}

chrome.runtime.sendMessage({ type: 'optionsPageview' });

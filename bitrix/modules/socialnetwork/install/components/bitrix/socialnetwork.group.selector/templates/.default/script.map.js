{"version":3,"sources":["script.js"],"names":["window","__windows","BX","GroupsPopup","searchTimeout","oXHR","create","uniquePopupId","bindElement","params","abortSearchRequest","this","abort","tabs","items2Objects","selected","lastGroups","myGroups","featuresPerms","mainChildren","events","eventName","hasOwnProperty","addCustomEvent","length","onCustomEvent","onInit","searchInput","props","className","push","style","children","adjust","keyup","proxy","e","event","search","target","srcElement","value","focus","blur","setTimeout","title","ajaxURL","addTab","tabsOuter","tabsContentOuter","splice","html","content","padding","minWidth","popupWindow","PopupWindowManager","autoHide","onPopupFirstShow","setContent","onPopupShow","__render","buttons","PopupWindowButton","text","message","click","close","prototype","show","selectTab","tab","i","removeClass","display","addClass","code","items","toUpperCase","setItems","cleanNode","count","appendChild","__renderItem","select","item","clearTimeout","id","lastSelected","util","in_array","userOptions","save","slice","deselect","itemId","query","url","__bx_group_site_id","encodeURIComponent","delegate","ajax","loadJSON","data","hasClass","avatar","image","background","encodeURI","backgroundSize","isSelected","itemNode","IS_EXTRANET"],"mappings":"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","file":"script.map.js"}
{"version":3,"file":"registry.bundle.map.js","names":["this","BX","Messenger","v2","exports","ui_dialogs_messagebox","im_v2_lib_call","im_v2_provider_service","im_v2_lib_utils","im_public","main_popup","main_core_events","ui_vue3_vuex","rest_client","im_v2_application_core","im_v2_const","main_core","EVENT_NAMESPACE","BaseMenu","EventEmitter","constructor","super","id","setEventNamespace","store","Core","getStore","restClient","getRestClient","onClosePopupHandler","onClosePopup","bind","openMenu","context","target","menuInstance","close","getMenuInstance","show","subscribe","EventType","dialog","closePopup","MenuManager","create","getMenuOptions","bindOptions","forceBindPosition","position","targetContainer","document","body","bindElement","cacheable","className","getMenuClassName","items","getMenuItems","events","onClose","emit","onCloseMenu","unsubscribe","destroy","getCurrentUserId","getUserId","resendAction","cancelAction","InviteManager","resendInvite","userId","data","params","ajax","runAction","then","showNotification","Loc","getMessage","error","handleActionError","cancelInvite","text","autoHideDelay","UI","Notification","Center","notify","content","status","errors","length","errorContent","map","element","message","join","RecentMenu","callManager","CallManager","getInstance","chatService","ChatService","angle","offsetLeft","compactMode","invitation","isActive","getInviteItems","getSendMessageItem","getUnreadMessageItem","getPinMessageItem","getMuteItem","getCallItem","getOpenProfileItem","getHideItem","getLeaveItem","onclick","openChat","dialogId","getters","showReadOption","unread","counter","readDialog","unreadDialog","isPinned","pinned","unpinChat","pinChat","canMute","isMuted","muteList","includes","unmuteChat","muteChat","chatCanBeCalled","startCall","getHistoryItem","isUser","type","DialogType","user","OpenTarget","current","auto","openHistory","chat","profileUri","Utils","getProfileLink","href","_this$context$invitat","_this$context$options","options","default_user_record","RecentService","hideChat","canLeaveChat","leaveChat","canInvite","Type","isUndefined","MessengerProxy","console","canManageInvite","originator","push","getDelimiter","canResend","getResendInviteItem","getCancelInviteItem","MessageBox","modal","buttons","MessageBoxButtons","OK_CANCEL","onOk","messageBox","onCancel","delimiter","Lib","Dialogs","Provider","Service","Main","Event","Vue3","Vuex","Application","Const"],"sources":["registry.bundle.js"],"mappings":"AAAAA,KAAKC,GAAKD,KAAKC,IAAM,CAAC,EACtBD,KAAKC,GAAGC,UAAYF,KAAKC,GAAGC,WAAa,CAAC,EAC1CF,KAAKC,GAAGC,UAAUC,GAAKH,KAAKC,GAAGC,UAAUC,IAAM,CAAC,GAC/C,SAAUC,EAAQC,EAAsBC,EAAeC,EAAuBC,EAAgBC,EAAUC,EAAWC,EAAiBC,EAAaC,EAAYC,EAAuBC,EAAYC,GAChM,aAEA,MAAMC,EAAkB,2BACxB,MAAMC,UAAiBP,EAAiBQ,aACtCC,cACEC,QACArB,KAAKsB,GAAK,uBACVtB,KAAKuB,kBAAkBN,GACvBjB,KAAKwB,MAAQV,EAAuBW,KAAKC,WACzC1B,KAAK2B,WAAab,EAAuBW,KAAKG,gBAC9C5B,KAAK6B,oBAAsB7B,KAAK8B,aAAaC,KAAK/B,KACpD,CAGAgC,SAASC,EAASC,GAChB,GAAIlC,KAAKmC,aAAc,CACrBnC,KAAKoC,OACP,CACApC,KAAKiC,QAAUA,EACfjC,KAAKkC,OAASA,EACdlC,KAAKmC,aAAenC,KAAKqC,kBACzBrC,KAAKmC,aAAaG,OAClB3B,EAAiBQ,aAAaoB,UAAUxB,EAAYyB,UAAUC,OAAOC,WAAY1C,KAAK6B,oBACxF,CACAQ,kBACE,OAAO3B,EAAWiC,YAAYC,OAAO5C,KAAK6C,iBAC5C,CACAA,iBACE,MAAO,CACLvB,GAAItB,KAAKsB,GACTwB,YAAa,CACXC,kBAAmB,KACnBC,SAAU,UAEZC,gBAAiBC,SAASC,KAC1BC,YAAapD,KAAKkC,OAClBmB,UAAW,MACXC,UAAWtD,KAAKuD,mBAChBC,MAAOxD,KAAKyD,eACZC,OAAQ,CACNC,QAAS,KACP3D,KAAK4D,KAAK1C,EAASwC,OAAOG,aAC1B7D,KAAKoC,OAAO,GAIpB,CACAqB,eACE,MAAO,EACT,CACAF,mBACE,MAAO,EACT,CACAzB,eACE9B,KAAKoC,OACP,CACAA,QACEzB,EAAiBQ,aAAa2C,YAAY/C,EAAYyB,UAAUC,OAAOC,WAAY1C,KAAK6B,qBACxF,IAAK7B,KAAKmC,aAAc,CACtB,MACF,CACAnC,KAAKmC,aAAa4B,UAClB/D,KAAKmC,aAAe,IACtB,CACA4B,UACE/D,KAAKoC,OACP,CACA4B,mBACE,OAAOlD,EAAuBW,KAAKwC,WACrC,EAEF/C,EAASwC,OAAS,CAChBG,YAAa,eAGf,MAAMK,EAAe,sCACrB,MAAMC,EAAe,8CACrB,MAAMC,EAAgB,CACpBC,aAAaC,GACX,MAAMC,EAAO,CACXC,OAAQ,CACNF,WAGJtD,EAAUyD,KAAKC,UAAUR,EAAc,CACrCK,SACCI,MAAK,KACN3E,KAAK4E,iBAAiB5D,EAAU6D,IAAIC,WAAW,kCAAmC,IAAK,IACtFC,IACD/E,KAAKgF,kBAAkBD,EAAM,GAEjC,EACAE,aAAaX,GACX,MAAMC,EAAO,CACXC,OAAQ,CACNF,WAGJtD,EAAUyD,KAAKC,UAAUP,EAAc,CACrCI,SACCI,MAAK,KACN3E,KAAK4E,iBAAiB5D,EAAU6D,IAAIC,WAAW,kCAAmC,IAAK,IACtFC,IACD/E,KAAKgF,kBAAkBD,EAAM,GAEjC,EACAH,iBAAiBM,EAAMC,EAAgB,KACrClF,GAAGmF,GAAGC,aAAaC,OAAOC,OAAO,CAC/BC,QAASN,EACTC,iBAEJ,EACAH,kBAAkBD,GAChB,GAAIA,EAAMU,SAAW,SAAWV,EAAMW,OAAOC,OAAS,EAAG,CACvD,MAAMC,EAAeb,EAAMW,OAAOG,KAAIC,GAC7BA,EAAQC,UACdC,KAAK,MACRhG,KAAK4E,iBAAiBgB,GACtB,OAAO,IACT,CACA5F,KAAK4E,iBAAiB5D,EAAU6D,IAAIC,WAAW,gCACjD,GAGF,MAAMmB,UAAmB/E,EACvBE,cACEC,QACArB,KAAKsB,GAAK,yBACVtB,KAAKkG,YAAc5F,EAAe6F,YAAYC,cAC9CpG,KAAKqG,YAAc,IAAI9F,EAAuB+F,WAChD,CACAzD,iBACE,MAAO,IACFxB,MAAMwB,iBACTS,UAAWtD,KAAKuD,mBAChBgD,MAAO,KACPC,WAAY,GAEhB,CACAjD,mBACE,OAAOvD,KAAKiC,QAAQwE,YAAc,GAAKpF,MAAMkC,kBAC/C,CACAE,eACE,GAAIzD,KAAKiC,QAAQyE,WAAWC,SAAU,CACpC,OAAO3G,KAAK4G,gBACd,CACA,MAAO,CAAC5G,KAAK6G,qBAAsB7G,KAAK8G,uBAAwB9G,KAAK+G,oBAAqB/G,KAAKgH,cAAehH,KAAKiH,cAEnHjH,KAAKkH,qBAAsBlH,KAAKmH,cAAenH,KAAKoH,eACtD,CACAP,qBACE,MAAO,CACL3B,KAAMlE,EAAU6D,IAAIC,WAAW,qBAC/BuC,QAAS,KACP5G,EAAUP,UAAUoH,SAAStH,KAAKiC,QAAQsF,UAC1CvH,KAAKmC,aAAaC,OAAO,EAG/B,CACA0E,uBACE,MAAMrE,EAASzC,KAAKwB,MAAMgG,QAAQ,iBAAiBxH,KAAKiC,QAAQsF,SAAU,MAC1E,MAAME,EAAiBzH,KAAKiC,QAAQyF,QAAUjF,EAAOkF,QAAU,EAC/D,MAAO,CACLzC,KAAMuC,EAAiBzG,EAAU6D,IAAIC,WAAW,oBAAsB9D,EAAU6D,IAAIC,WAAW,sBAC/FuC,QAAS,KACP,GAAII,EAAgB,CAClBzH,KAAKqG,YAAYuB,WAAW5H,KAAKiC,QAAQsF,SAC3C,KAAO,CACLvH,KAAKqG,YAAYwB,aAAa7H,KAAKiC,QAAQsF,SAC7C,CACAvH,KAAKmC,aAAaC,OAAO,EAG/B,CACA2E,oBACE,MAAMe,EAAW9H,KAAKiC,QAAQ8F,OAC9B,MAAO,CACL7C,KAAM4C,EAAW9G,EAAU6D,IAAIC,WAAW,qBAAuB9D,EAAU6D,IAAIC,WAAW,mBAC1FuC,QAAS,KACP,GAAIS,EAAU,CACZ9H,KAAKqG,YAAY2B,UAAUhI,KAAKiC,QAAQsF,SAC1C,KAAO,CACLvH,KAAKqG,YAAY4B,QAAQjI,KAAKiC,QAAQsF,SACxC,CACAvH,KAAKmC,aAAaC,OAAO,EAG/B,CACA4E,cACE,MAAMkB,EAAUlI,KAAKwB,MAAMgG,QAAQ,qBAAqBxH,KAAKiC,QAAQsF,UACrE,IAAKW,EAAS,CACZ,OAAO,IACT,CACA,MAAMzF,EAASzC,KAAKwB,MAAMgG,QAAQ,iBAAiBxH,KAAKiC,QAAQsF,SAAU,MAC1E,MAAMY,EAAU1F,EAAO2F,SAASC,SAASvH,EAAuBW,KAAKwC,aACrE,MAAO,CACLiB,KAAMiD,EAAUnH,EAAU6D,IAAIC,WAAW,sBAAwB9D,EAAU6D,IAAIC,WAAW,oBAC1FuC,QAAS,KACP,GAAIc,EAAS,CACXnI,KAAKqG,YAAYiC,WAAWtI,KAAKiC,QAAQsF,SAC3C,KAAO,CACLvH,KAAKqG,YAAYkC,SAASvI,KAAKiC,QAAQsF,SACzC,CACAvH,KAAKmC,aAAaC,OAAO,EAG/B,CACA6E,cACE,MAAMuB,EAAkBxI,KAAKkG,YAAYsC,gBAAgBxI,KAAKiC,QAAQsF,UACtE,IAAKiB,EAAiB,CACpB,OAAO,IACT,CACA,MAAO,CACLtD,KAAMlE,EAAU6D,IAAIC,WAAW,oBAC/BuC,QAAS,KACPrH,KAAKkG,YAAYuC,UAAUzI,KAAKiC,QAAQsF,UACxCvH,KAAKmC,aAAaC,OAAO,EAG/B,CACAsG,iBACE,MAAMjG,EAASzC,KAAKwB,MAAMgG,QAAQ,iBAAiBxH,KAAKiC,QAAQsF,SAAU,MAC1E,MAAMoB,EAASlG,EAAOmG,OAAS7H,EAAY8H,WAAWC,KACtD,GAAIH,EAAQ,CACV,OAAO,IACT,CACA,MAAO,CACLzD,KAAMlE,EAAU6D,IAAIC,WAAW,4BAC/BuC,QAAS,KACP,MAAMnF,EAASlC,KAAKiC,QAAQC,SAAWnB,EAAYgI,WAAWC,QAAUjI,EAAYgI,WAAWC,QAAUjI,EAAYgI,WAAWE,KAChItI,EAAiBQ,aAAayC,KAAK7C,EAAYyB,UAAUC,OAAOyG,YAAa,IACxElJ,KAAKiC,QACRkH,KAAMnJ,KAAKwB,MAAMgG,QAAQ,iBAAiBxH,KAAKiC,QAAQsF,SAAU,MACjEuB,KAAM9I,KAAKwB,MAAMgG,QAAQ,aAAaxH,KAAKiC,QAAQsF,SAAU,MAC7DrF,WAEFlC,KAAKmC,aAAaC,OAAO,EAG/B,CACA8E,qBACE,MAAMyB,EAAS3I,KAAKwB,MAAMgG,QAAQ,oBAAoBxH,KAAKiC,QAAQsF,UACnE,IAAKoB,EAAQ,CACX,OAAO,IACT,CACA,MAAMS,EAAa5I,EAAgB6I,MAAMP,KAAKQ,eAAetJ,KAAKiC,QAAQsF,UAC1E,MAAO,CACLrC,KAAMlE,EAAU6D,IAAIC,WAAW,4BAC/ByE,KAAMH,EACN/B,QAAS,KACPrH,KAAKmC,aAAaC,OAAO,EAG/B,CACA+E,cACE,IAAIqC,EAAuBC,EAC3B,IAAKD,EAAwBxJ,KAAKiC,QAAQyE,aAAe,MAAQ8C,EAAsB7C,WAAa8C,EAAwBzJ,KAAKiC,QAAQyH,UAAY,MAAQD,EAAsBE,oBAAqB,CACtM,OAAO,IACT,CACA,MAAO,CACLzE,KAAMlE,EAAU6D,IAAIC,WAAW,oBAC/BuC,QAAS,KACP9G,EAAuBqJ,cAAcxD,cAAcyD,SAAS7J,KAAKiC,QAAQsF,UACzEvH,KAAKmC,aAAaC,OAAO,EAG/B,CACAgF,eACE,MAAM0C,EAAe9J,KAAKwB,MAAMgG,QAAQ,sBAAsBxH,KAAKiC,QAAQsF,UAC3E,IAAKuC,EAAc,CACjB,OAAO,IACT,CACA,MAAO,CACL5E,KAAMlE,EAAU6D,IAAIC,WAAW,qBAC/BuC,QAAS,KACPrH,KAAKqG,YAAY0D,UAAU/J,KAAKiC,QAAQsF,UACxCvH,KAAKmC,aAAaC,OAAO,EAG/B,CAGAwE,iBACE,MAAMpD,EAAQ,CAACxD,KAAK6G,qBAAsB7G,KAAKkH,sBAC/C,IAAI8C,EACJ,GAAIhJ,EAAUiJ,KAAKC,YAAYjK,GAAGkK,gBAAiB,CACjDH,EAAY,KACZI,QAAQrF,MAAM,gEAChB,KAAO,CACLiF,EAAY/J,GAAGkK,eAAeH,WAChC,CACA,MAAMK,EAAkBL,GAAalJ,EAAuBW,KAAKwC,cAAgBjE,KAAKiC,QAAQyE,WAAW4D,WACzG,GAAID,EAAiB,CACnB7G,EAAM+G,KAAKvK,KAAKwK,eAAgBxK,KAAKiC,QAAQyE,WAAW+D,UAAYzK,KAAK0K,sBAAwB,KAAM1K,KAAK2K,sBAC9G,CACA,OAAOnH,CACT,CACAkH,sBACE,MAAO,CACLxF,KAAMlE,EAAU6D,IAAIC,WAAW,6BAC/BuC,QAAS,KACPjD,EAAcC,aAAarE,KAAKiC,QAAQsF,UACxCvH,KAAKmC,aAAaC,OAAO,EAG/B,CACAuI,sBACE,MAAO,CACLzF,KAAMlE,EAAU6D,IAAIC,WAAW,6BAC/BuC,QAAS,KACPhH,EAAsBuK,WAAWtI,KAAK,CACpCyD,QAAS/E,EAAU6D,IAAIC,WAAW,qCAClC+F,MAAO,KACPC,QAASzK,EAAsB0K,kBAAkBC,UACjDC,KAAMC,IACJ9G,EAAca,aAAajF,KAAKiC,QAAQsF,UACxC2D,EAAW9I,OAAO,EAEpB+I,SAAUD,IACRA,EAAW9I,OAAO,IAGtBpC,KAAKmC,aAAaC,OAAO,EAG/B,CAGAoI,eACE,MAAO,CACLY,UAAW,KAEf,EAGFhL,EAAQ6F,WAAaA,EACrB7F,EAAQc,SAAWA,CAEpB,EAnVA,CAmVGlB,KAAKC,GAAGC,UAAUC,GAAGkL,IAAMrL,KAAKC,GAAGC,UAAUC,GAAGkL,KAAO,CAAC,EAAGpL,GAAGmF,GAAGkG,QAAQrL,GAAGC,UAAUC,GAAGkL,IAAIpL,GAAGC,UAAUC,GAAGoL,SAASC,QAAQvL,GAAGC,UAAUC,GAAGkL,IAAIpL,GAAGC,UAAUC,GAAGkL,IAAIpL,GAAGwL,KAAKxL,GAAGyL,MAAMzL,GAAG0L,KAAKC,KAAK3L,GAAGA,GAAGC,UAAUC,GAAG0L,YAAY5L,GAAGC,UAAUC,GAAG2L,MAAM7L"}
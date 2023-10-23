{"version":3,"file":"registry.bundle.map.js","names":["this","BX","Messenger","Embedding","exports","DateFormat","Object","freeze","groupTitle","message","recentTitle","recentLinesTitle","readedTitle","default","vacationTitle","DeviceType","mobile","desktop","DeviceOrientation","horizontal","portrait","MutationType","none","add","update","delete","set","setAfter","setBefore","StorageLimit","dialogues","messages","Settings","darkTheme","bigSmileEnable","SettingsMap","enableDarkTheme","OpenTarget","current","auto","BotType","bot","network","support24","RestMethod","imMessageAdd","imMessageUpdate","imMessageDelete","imMessageLike","imMessageCommand","imMessageShare","imChatAdd","imChatGet","imChatLeave","imChatMute","imChatUpdateTitle","imChatParentJoin","imChatFileCollectionGet","imChatFileGet","imChatUrlGet","imChatUrlDelete","imChatTaskGet","imChatTaskDelete","imChatCalendarGet","imChatFavoriteAdd","imChatFavoriteDelete","imChatFavoriteGet","imChatFavoriteCounterGet","imChatUrlCounterGet","imChatPinGet","imChatPinAdd","imChatPinDelete","imChatTaskPrepare","imChatCalendarPrepare","imChatCalendarAdd","imChatCalendarDelete","imChatUserDelete","imChatUserAdd","imDialogGet","imDialogMessagesGet","imDialogRead","imDialogUnread","imDialogWriting","imDialogRestrictionsGet","imDialogReadAll","imDialogContextGet","imDialogUsersList","imUserGet","imUserListGet","imUserStatusSet","imDiskFolderGet","imDiskFolderListGet","imDiskFileUpload","imDiskFileCommit","imDiskFileDelete","imDiskFileSave","mobileBrowserConstGet","imRecentGet","imRecentList","imRecentPin","imRecentUnread","imRecentHide","imCallGetCallLimits","imNotifyGet","imNotifyRead","imNotifySchemaGet","imNotifyHistorySearch","imNotifyAnswer","imSmilesGet","RestMethodHandler","imDialogMessagesGetInit","imDialogMessagesGetUnread","PullCommand","messageUpdate","messageDelete","PullHandlers","recent","notification","sidebar","EventType","layout","onLayoutChange","onOpenChat","onOpenNotifications","dialog","open","call","openHistory","clearHistory","hide","leave","newMessage","scrollOnStart","scrollToBottom","readVisibleMessages","requestUnread","readMessage","quoteMessage","clickOnCommand","clickOnMention","clickOnUserName","clickOnMessageMenu","clickOnMessageRetry","clickOnReadList","setMessageReaction","openMessageReactionList","clickOnKeyboardButton","clickOnChatTeaser","clickOnDialog","quotePanelClose","beforeMobileKeyboard","goToMessageContext","messagesSet","settingsChange","closePopup","errors","accessDenied","onDialogInited","textarea","focus","setFocus","blur","setBlur","keyUp","editMessage","insertText","insertMention","sendMessage","fileSelected","startWriting","stopWriting","appButtonClick","uploader","addMessageWithFile","cancel","conference","setPasswordFocus","hideSmiles","requestPermissions","waitForStart","userRenameFocus","userRenameBlur","updateState","setText","openUserList","search","clearInput","keyPressed","selectItem","openNetworkItem","openContextMenu","openSearch","updateSearch","closeSearch","requestUser","setCounter","setMessage","hideChat","leaveChat","clearLike","setDraftMessage","close","mention","openChatInfo","DialogType","user","chat","general","videoconf","announcement","support24Notifier","support24Question","crm","sonetGroup","calendar","tasks","thread","mail","lines","DialogScrollThreshold","nearTheBottom","halfScreenUp","DialogCrmType","lead","company","contact","deal","DialogReferenceClassName","listBody","listItem","listItemName","listItemBody","listUnreadLoader","DialogTemplateType","delimiter","group","historyLoader","unreadLoader","button","placeholder","DialogState","loading","empty","show","DialogBlockType","dateGroup","authorGroup","newMessages","markedMessages","FileStatus","upload","wait","progress","done","error","FileType","image","video","audio","file","FileIconType","code","attach","quote","MessageType","self","opponent","system","MessageComponent","base","MessageMentionType","context","OwnMessageStatus","sending","sent","viewed","ConferenceFieldState","view","edit","create","ConferenceStateType","preparation","ConferenceErrorCode","userLimitReached","detectIntranetUser","bitrix24only","kickedFromCall","unsupportedBrowser","missingMicrophone","unsafeConnection","wrongAlias","notStarted","finished","userLeftCall","noSignalFromCamera","ConferenceRightPanelMode","hidden","users","split","ConferenceUserState","Idle","Busy","Calling","Unavailable","Declined","Ready","Connecting","Connected","Failed","RecentSection","pinned","MessageStatus","received","delivered","RecentCallStatus","waiting","joined","RecentSettings","showBirthday","showInvited","showLastMessage","RecentSettingsMap","viewBirthday","viewCommonUsers","viewLastMessage","NotificationTypesCodes","confirm","simple","ChatOption","avatar","extend","leaveOwner","mute","rename","send","userList","Layout","name","list","content","createChat","openline","market","SearchEntityIdTypes","chatUser","department","UserStatus","offline","online","mobileOnline","away","idle","dnd","break","UserExternalType","Color","transparent","AttachType","Delimiter","File","Grid","Html","Image","Link","Message","Rich","User","AttachDescription","FIRST_MESSAGE","SKIP_MESSAGE","DesktopFeature","mask","id","availableFromVersion","ApplicationName","core","quickAccess","messenger","PopupType","userProfile","userStatus","recentContextMenu","recentHeaderMenu","createChatMenu","dialogMessageMenu","dialogAvatarMenu","dialogReactionUsers","dialogReadUsers","LocalStorageKey","smileLastUpdateTime","Const"],"sources":["registry.bundle.js"],"mappings":"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"}
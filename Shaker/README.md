Shaker
===

React Native iOS 摇一摇并播放音效示例

第三方库：[https://github.com/jadsonlourenco/react-native-shake-event](https://github.com/jadsonlourenco/react-native-shake-event)

[https://github.com/futurice/react-native-audio-toolkit](https://github.com/futurice/react-native-audio-toolkit)

关于音效播放要注意 音频文件的存放位置：[文档](https://github.com/futurice/react-native-audio-toolkit/blob/master/docs/SOURCES.md#bundle-media-with-application)

**iOS:**
Drag and drop your media file into the project navigator in Xcode under the AppName/AppName directory. `.mp3` format is **recommended** for best compatibility.


```
new Player("filename.mp3").play()
```

const APP_ID = 'o4Bn1Madv5UquxkxilQjhiAz-gzGzoHsz'
const APP_KEY = 'swNopMYdl31K0KHLLEfPQdhJ'
window.AV.init({
    appId: APP_ID,
    appKey: APP_KEY,
    serverURLs: {
        push: 'https://avoscloud.com',
        stats: 'https://avoscloud.com',
        engine: 'https://avoscloud.com',
        api: 'https://avoscloud.com',
    },
});
//标签
const tagStr = '首页,GitHub,Node.js,Web,iOS,ReactNative,Swift,MongoDB,Vue,HTML,JavaScript,日常踩坑,动漫,工具,编程疑问,游戏,翻译,算法,书,非技术文章,我'

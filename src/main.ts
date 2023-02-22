import SequencePlayer, { IOptions } from "./sequencePlayer";
import sequenceJSON from './assets/spritesheetJSON.json'
// @ts-ignore
import sequenceIMG from './assets/spritesheet.png'
import { imageLoader } from './imageLoader'

(function () {

})()
const app = document.getElementById("app");
if (app) {
    app.innerHTML = "<h1>Hello, TypeScript and HTML!</h1>";
}

(function () {
    let startBtn = document.querySelector('#start')
    let pauseBtn = document.querySelector('#pause')
    let continueBtn = document.querySelector('#continue')
    let stopBtn = document.querySelector('#stop')
    let sequencePlayer: SequencePlayer

    imageLoader(sequenceIMG).then(img => {
        sequencePlayer = new SequencePlayer({
            canvasId: "sequenceCanvas",
            sequenceJSON: sequenceJSON as unknown as IOptions['sequenceJSON'],
            sequenceIMG: img,
            time: 1000,
            onFinish: () => {
                // 循环播放
                // sequencePlayer.start()
            },
            prefixName: 'red_'
        })
        // sequencePlayer().then(function () {
        //     console.log('完啦？？');
        // })
    })

    startBtn?.addEventListener('click', function () {
        console.log('点击开始');
        sequencePlayer.start()
    })

    pauseBtn?.addEventListener('click', function () {
        console.log('点击暂停');
        sequencePlayer.pause()
    })

    continueBtn?.addEventListener('click', function () {
        console.log('点击继续');
        sequencePlayer.continue()
    })

    stopBtn?.addEventListener('click', function () {
        console.log('点击结束');
        sequencePlayer.stop()
    })

})();
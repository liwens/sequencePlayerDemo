enum PlayStateType {
    Pending = 'PENDING',
    Playing = 'PLAYING',
    Pause = 'PAUSED',
    Finshed = 'FINISHED',
    Stop = 'STOP'
}

interface ISize {
    w: number
    h: number
}

interface Ixywh {
    x: number,
    y: number,
    w: number,
    h: number
}

type IMGName = string

export interface IOptions {
    /**canvas元素ID */
    canvasId: string
    /**精灵图 */
    sequenceIMG: HTMLImageElement
    /**运行时间，单位毫秒 */
    time: number
    /**序列图JSON数据*/
    sequenceJSON: {
        meta: {
            image: string
            size: ISize
            scale: number
        },
        frames: Record<IMGName, {
            frame: Ixywh,
            rotated: boolean,
            trimmed: boolean,
            spriteSourceSize: Ixywh,
            sourceSize: ISize
        }>
    },
    /**播放完成 */
    onFinish?: Function,
    /**文件名字前缀，
     * 例如你的文件名是 red_0.png, red_1.png, red_2.png ...以此类推那么prefixName则是 “red_” */
    prefixName?: string

}
export default class SequencePlayer {
    sequenceIndex: number = 0
    canvas: HTMLCanvasElement
    context: CanvasRenderingContext2D
    frames: HTMLCanvasElement[] = []
    index: number = 0
    time: number
    inter: any
    playState: PlayStateType = PlayStateType.Pending
    onFinish: Function | undefined
    prefixName?: string = ''
    constructor({ canvasId, sequenceJSON, sequenceIMG, time, onFinish, prefixName }: IOptions) {
        // let { size } = sequenceJSON
        this.time = time
        this.canvas = document.getElementById(canvasId) as HTMLCanvasElement
        this.context = this.canvas.getContext("2d") as CanvasRenderingContext2D
        this.onFinish = onFinish
        this.prefixName = prefixName

        this.initPlayer(sequenceJSON, sequenceIMG)


    }
    initPlayer (sequenceJSON: IOptions['sequenceJSON'], sequenceIMG: IOptions['sequenceIMG']) {
        let { frames } = sequenceJSON

        this.sequenceIndex = Object.keys(frames).length;
        for (var i = 0; i < this.sequenceIndex; i++) {
            // 根据图片命名读取数据，“prefixName”可以根据序列帧实际名称由外部传入
            const item = frames[`${this.prefixName}${i}.png`]
            console.log(item, '<===item');
            const canvas = document.createElement('canvas');
            canvas.width = item.sourceSize.w
            canvas.height = item.sourceSize.h
            const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
            ctx.drawImage(sequenceIMG as HTMLImageElement, item.frame.x, item.frame.y, item.frame.w, item.frame.h, item.spriteSourceSize.x, item.spriteSourceSize.y, item.spriteSourceSize.w, item.spriteSourceSize.h)

            this.frames.push(canvas)
        }
    }

    drawImage (): void {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.context.drawImage(this.frames[this.index], 0, 0, this.canvas.width, this.canvas.height)
    }

    handleDraw (): void {
        this.drawImage()
        this.inter = setTimeout(() => {
            if (this.index >= this.frames.length - 1) {
                this.handleEnd()
            } else {
                this.index += 1
                this.handleDraw()
            }
        }, this.time / this.sequenceIndex)

    }

    start (): boolean {
        this.index = 0
        return this.continue()
    }

    pause (): boolean {
        clearTimeout(this.inter)
        this.playState = PlayStateType.Pause

        return true
    }

    continue (): boolean {
        console.log(this.playState, "<==this.playState ");
        if (this.playState !== PlayStateType.Playing) {
            this.playState = PlayStateType.Playing
            this.handleDraw()
        }

        return true
    }
    private handleEnd (): void {
        this.playState = PlayStateType.Finshed
        typeof this.onFinish === 'function' && this.onFinish()
    }

    stop (): boolean {
        this.pause()
        this.inter = null
        this.index = 0
        this.playState = PlayStateType.Stop

        return true
    }
}
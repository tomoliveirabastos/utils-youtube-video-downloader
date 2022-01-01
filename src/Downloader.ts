import { createWriteStream } from 'fs';
import ytdl from 'ytdl-core';
import arg from 'arg'
import { IDownloader } from './Interfaces/IDownloader';
import { v4 } from 'uuid'

class Downloader implements IDownloader {
    private link: string;
    private name: string;
    private format: string;

    constructor(arg: arg.Result<any>) {
        this.link = arg['--link']
        this.name = arg['--name'] || v4()
        this.format = arg['--format'] || 'mp4'
        this.mp4 = this.mp4.bind(this)
    }

    public mp4(): void {
        if(!this.link) return

        ytdl(this.link)
            .pipe(createWriteStream(`${this.name}.mp4`))
            .on('open', () => console.log('downloading...'))
            .on('finish', () => console.log("it's the end"))
    }

    public execute(): void {
        const service: any = {
            'mp4': this.mp4,
        }

        service[this.format]()
    }
}

export { Downloader }

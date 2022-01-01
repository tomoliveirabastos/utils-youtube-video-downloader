import { Downloader } from "./src/Downloader";
import arg from 'arg';

const args = arg({
    '--name' : String,
    '--link': String
})

const downloader = new Downloader(args)
downloader.execute()
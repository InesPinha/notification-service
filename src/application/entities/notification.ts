import { Content } from './content';
import { Replace } from 'src/helpers/Replace';
import { randomUUID } from 'node:crypto';


export interface INotification {
    recipientId: string;
    content: Content;
    category: string;
    createdAt: Date;
    readAt?: Date | null; // it can be null, date or undefined(?) 
    canceledAt?: Date | null;
    //null cleans from database; undefined ignores update and mantains the date
}

export class Notification {
    private _id: string;
    private props: INotification;

    constructor(props: Replace<INotification, { createdAt?: Date }>) {
        this._id = randomUUID();
        this.props = {
            ...props,
            createdAt: props.createdAt ?? new Date(),
        }
    }

    public get id(): string {
        return this._id;
    }

    public set content(content: Content) {
        //if (content.length < 5) throw new Error('set content') //vantage of using set method
        this.props.content = content;
    }

    public get content(): Content {
        return this.props.content;
    }

    public set category(category: string) {
        this.props.category = category;
    }
    public get category(): string {
        return this.props.category;
    }
    /*    Don't make sense to set the creation date
       public set createdAt(createdAt: Date) {
           this.props.createdAt = createdAt;
       } */
    public get createdAt(): Date {
        return this.props.createdAt;
    }
    public set readAt(readAt: Date | null | undefined) {
        this.props.readAt = readAt;
    }
    public get readAt(): Date | null | undefined {
        return this.props.readAt;
    }
    public set recipientId(recipientId: string) {
        this.props.recipientId = recipientId;
    }
    public get recipientId(): string {
        return this.props.recipientId;
    }
    public get canceledAt(): Date | null | undefined {
        return this.props.canceledAt;
    }
    public cancel() {
        
    }
}

/* const not = new Notification({
    content: 'content of notification',
    category: 'category of notification'
});
not.content = 'content of notification'; //this is the set method, not the property  */
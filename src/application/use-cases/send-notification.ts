import { Notification } from '../entities/notification';
import { Content } from '../entities/content';
import { NotificationsRepository } from '../repositories/notifications-repositorie';
import { Injectable } from '@nestjs/common';

interface ISendNotificationRequest {
    recipientId: string;
    content: string;
    category: string;
}
interface ISendNotificationResponse {
    notification: Notification;
}

@Injectable()
export class SendNotification {
    constructor(
        private notficationsRepository: NotificationsRepository
    ) { }

    async execute(request: ISendNotificationRequest): Promise<ISendNotificationResponse> {
        const { recipientId, content, category } = request;
        const notification = new Notification({
            content: new Content(content),
            recipientId,
            category
        });

        await this.notficationsRepository.create(notification);

        return {
            notification
        }
    }
}
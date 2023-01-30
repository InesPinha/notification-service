import { Notification } from "@application/entities/notification";

export class NotificationViewModel
 {
    //static -this way i don't need do instantiation
    static toPrisma(notification: Notification) {
        return {
            id: notification.id,
            content: notification.content.value,
            category: notification.category,
            recipientId: notification.recipientId,
            readAt: notification.readAt,
            createdAt: notification.createdAt,
        }
    }
}
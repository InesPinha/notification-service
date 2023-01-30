import { Notification } from './notification';
import { Content } from './content';

describe('Notification content', () => {

    it('should be able to create a notification', () => {
        const notification = new Notification({
            content: new Content('This a test notification'),
            category: 'social',
            recipientId: 'example-recipient-id',

        });
        expect(notification).toBeTruthy();
    });


}); 
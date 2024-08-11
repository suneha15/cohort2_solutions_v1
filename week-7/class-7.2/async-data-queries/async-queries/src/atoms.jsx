import {atom, selector} from "recoil";

export const notificationAtom = atom({
    key : "notificationAtom",
    default : {
        network : 0,
        jobs : 0,
        messaging : 0,
        notifications : 0
    }
});

export const totalNotificationSelector = selector({
    key : "totalNotificationSelector",
    get : ({get}) => {
        const allNotifications = get(notificationAtom)
        return allNotifications.network + allNotifications.jobs +  allNotifications.messaging + allNotifications.notifications
    }
})
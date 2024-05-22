export const profileRoutes = [
    {
        path: "/profile",
        name: "ProfilePage",
        component: () => import("@/views/ProfilePage.vue")
    },
    {
        path: "/profile/challanges",
        name: "ChallangesPage",
        component: () => import("@/views/ChallangesPage.vue")
    },
    {
        path: "/profile/friends",
        name: "FriendsPage",
        component: () => import("@/views/FriendsPage.vue"),
        children: [
            {
                path: "",
                name: "FriendsList",
                component: () => import("@/components/FriendsList.vue")
            },
            {
                path: "send-request",
                name: "FriendsSendRequest",
                component: () => import("@/components/FriendsSendRequest.vue")
            },
            {
                path: "requests",
                name: "FriendsRequestsList",
                component: () => import("@/components/FriendsRequestsList.vue")
            }
        ]
    },
    {
        path: "/profile/games",
        name: "GamesHistoryPage",
        component: () => import("@/views/GamesHistoryPage.vue")
    },
    {
        path: "/profile/statistics",
        name: "StatisticsPage",
        component: () => import("@/views/StatisticsPage.vue")
    }
]

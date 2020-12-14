function problem(input) {
    let profile = {};

    let command = input.shift();
    while (command !== 'Log out') {
        let curCommand = command.split(": ");

        switch (curCommand[0]) {
            case 'New follower':
                profile = newFollowerCase(profile, curCommand)
                break;
            case 'Like':
                profile = likeCase(profile, curCommand);
                break;
            case 'Comment':
                profile = commentCase(profile, curCommand);
                break;
            case 'Blocked':
                profile = blockedCase(profile, curCommand);
                break;
        }

        command = input.shift();
    }

    let numFollowers = Object.keys(profile).length;
    console.log(`${numFollowers} followers`);

    Object.entries(profile)
        .sort((a, b) => {
            if (a[1] == b[1]) {
                return a[0].localeCompare(b[0]);
            }

            return b[1] - a[1];
        })
        .forEach(kvp => {
            console.log(`${kvp[0]}: ${kvp[1]}`);
        })

    function newFollowerCase(obj, arr) {
        let username = arr[1];

        if (!obj.hasOwnProperty(username)) {
            obj[username] = 0
        }

        return obj;
    }

    function likeCase(obj, arr) {
        let [username, count] = arr.slice(1);
        count = Number(count);

        if (!obj.hasOwnProperty(username)) {
            obj[username] = count;
        } else {
            let oldLikesAndCommands = obj[username];
            obj[username] = oldLikesAndCommands + count;
        }

        return obj;
    }

    function commentCase(obj, arr) {
        let username = arr[1];

        if (!obj.hasOwnProperty(username)) {
            obj[username] = 1;
        } else {
            let oldLikesAndCommands = obj[username];
            obj[username] = oldLikesAndCommands + 1;
        }

        return obj;
    }

    function blockedCase(obj, arr) {
        let username = arr[1];

        if (!obj.hasOwnProperty(username)) {
            console.log(`${username} doesn't exist.`);
        } else {
            delete obj[username];
        }

        return obj;
    }
}


problem(
    [
        'Like: A: 3',
        'Comment: A',
        'New follower: B',
        'Blocked: A',
        'Comment: B',
        'Like: C: 5',
        'Like: D: 5',
        'Log out'
    ]


)

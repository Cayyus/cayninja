document.getElementById('form-submit-btn').addEventListener('click', get_list_template)
document.getElementById('copy-button').addEventListener('click', copyList)


function copyList() {
    // Get the textarea element
    var outputBox = document.getElementById("outputBox");

    // Select the text inside the textarea
    outputBox.select();

    // Execute the copy command
    document.execCommand("copy");

    // Deselect the text
    outputBox.blur(); // This will deselect the text, making the blue highlight disappear
}


const templates = {
    'Forum': `[code]Hello there, %nation%!

I hope you are enjoying NationStates and being in The North Pacific. You are fortunate to have been founded in a region that gives you so many opportunities, but there is more that you could have access to.

[spoiler=Opportunities on the Forum]

The North Pacific has a forum, which is the best way to get involved in our region. On the forum you can apply for citizenship, join the North Pacific Army, join the Executive Staff of TNP, if you are a NS card collector you can join the Cards Guild and you can also get involved in role-playing. Citizenship will allow you to vote in the Regional Assembly, the legislative body of TNP and run for regional offices such as Delegate, Vice Delegate, Speaker of the Regional Assembly, and Court Justice. Joining the NPA will allow you to go on missions to defend The North Pacific and our allies as well as act as TNP’s main military force. Our ministries are always looking for new members to the executive staff and you can choose the ministries that you want to be involved in. The TNP forum has a very active role-play department and you can do almost anything with your country while role-playing.[/spoiler]

So why wait?

[spoiler=Important Links]

You can register and create a profile on the forum here: [b]http://forum.thenorthpacific.org/index/[/b]

While you are at it apply for citizenship here: [b]http://forum.thenorthpacific.org/topic/9145386/1/[/b]

If you are interested, join the NPA here: [b]http://forum.thenorthpacific.org/topic/9145375/1/[/b]

You can access the role-play section of our forum here: [b]http://forum.thenorthpacific.org/forum/3024521/[/b]

You can join the Cards Guild here : [b]https://forum.thenorthpacific.org/topic/9191329/[/b]
[/spoiler]

If you have any questions about anything, please contact me.

Thank you,

[Your Name][/code]`,

'Exec': `
[code]Hello there, %NATION%!

You seem to like running your nation. Wouldn't you like to run all of [region=The North Pacific]?

The Executive Staff does the day-to-day operations of TNP's government. It does all sorts of activities from relations with other regions, to welcoming newcomers, to regional culture, and everything in between. You can pick and choose which activities you want to do based on your preferences!

The Executive Staff is also one of the best ways to prove yourself in our community and advance to titles like Minister, Vice Delegate and Delegate! After all, where else is that government experience going to come from?

All you have to do is:
[list=1]
[*]Register on our forums here: [b]https://forum.thenorthpacific.org/[/b]
[*]Apply for the Executive Staff here: [b]https://forum.thenorthpacific.org/topic/7198621/[/b]
[/list]
And once you've done that, a Minister or Deputy Minister from all the Ministries you applied to will message you with more information on the forums!

Hope to see you there,
[Your name][/code]
`,

"Citizen": `
[code]Hello there!

Would you like to vote on issues affecting all nations of The North Pacific?

By becoming a citizen of The North Pacific, you can do just that! Citizenship allows you to draft, debate, and vote on proposals in the [url=/page=dispatch/id=842823]Regional Assembly[/url]. It also makes you eligible to hold a government office, vote in elections, and more. Sounds like a pretty important role, right?

To apply for citizenship, go to this URL and follow the instructions in the first post: [b][u]http://forum.thenorthpacific.org/topic/9145386/1/[/u][/b].

I hope to see you around the forum! Let me know if you have any questions.

Thank you,
[Your Name][/code]
`,

"NPA": `
[code]Hello, %NATION!%

My name is [your name] and [b]I want you[/b] to join the North Pacific Army (NPA) today! The NPA is The North Pacific's very own military and could be the most fun that you will have in this game.

The NPA conducts a variety of fast-paced operations in overseas regions, requiring its members to act with high speed and coordination on specific orders. Luckily, the NPA has lots of experienced and welcoming members who will help you every step of the way. You do need to able to attend at the game's update times, which are at 12 am and 12 pm EST.

If you can't make it to those times, you can still serve through piling! Pile orders merely require you to complete simple instructions and can, unlike update operations, be done at any time of the day.

Joining the North Pacific Army is also a great way to advance your career in The North Pacific, training you for the position of Minister of Defence and eventually Delegate.

If any of that sounds interesting to you, %NATION%, I encourage you to join the North Pacific Army! Here's how:
[list=1]
[*]Register on our forums here: [b]https://forum.thenorthpacific.org/[/b]
[*]Sign up for the NPA here: [b]https://forum.thenorthpacific.org/topic/9145375/[/b]
[/list]
And a member of the NPA will reach out to you with more information!

For a more detailed explanation on how the NPA operates see the dispatch below:
https://www.nationstates.net/page=dispatch/id=1940210

Cheers,
[Your name][/code]
`,

"WA": `
[code]Hey there!

What if you could vote on issues that affect all nations in the world?

In the [b][url=/page=un]World Assembly (WA)[/url][/b], you can! You get to vote on, and even create your own, proposals that cover a wide range of issues. Proposals that pass are applied to all WA nations.

Being in the WA also means you can top world and regional rankings, win awards, become influential, and many more. You can [b][url=/page=dispatch/id=338371]click here to read all about why to join the WA[/url][/b].

Joining the WA is easy and only takes about two minutes.

[spoiler=[b]How to join the WA[/b]]

[b]Step 1:[/b] Make sure you have a valid email address listed under [b][url=/page=settings]Settings[/url][/b].


[b]Step 2:[/b] [b][url=/page=un]Click here to go to the World Assembly page[/url][/b].


[b]Step 3:[/b] Click 'Apply to Join' underneath the World Assembly logo.


[b]Step 4:[/b] Go to your email and look for an email from the World Assembly. ([i]Please note: If it's not in your inbox, it might be in your spam[/i])


[b]Step 5:[/b] Click on the confirmation link and then click the confirm button.

You're now part of the WA and can participate in all the exciting aspects of it![/spoiler]

Once you have joined the World Assembly, make sure to endorse [b]Delegate [nation]Chipoli[/nation] as well as [url=page=dispatch/id=485372] all Security Council members[/url][/b]. This helps strengthen the security of our region, to learn more about that, check out the [b][url=/page=dispatch/id=338370]World Assembly Development Program (WADP)[/url][/b].

I hope to see you in the WA soon. Let me know if you have any questions!

Thanks,

[Your name][/code]
`,

"Home Affairs": `[code]Hello, %NATION%,

My name is [your name] and this is an invitation to join the Ministry of Home Affairs! At the center of welcoming new members, this Ministry is the lifeblood of The North Pacific and is itself very welcoming to new people! It:
[list][*]Sends telegrams to nation of The North Pacific (like this one!) inviting them into the community;
[*]Sends private messages on The North Pacific's forums to new members as part of the forum mentor program;
[*]Maintains dispatches like our [url=page=dispatch/id=851343]handbook[/url];
Additionally, the Ministry is a great way to make a name for yourself in TNP, and you may find yourself quickly climbing the ranks. You could even be delegate of The North Pacific someday thanks to Home Affairs!
If that sounds interesting to you, %nation%, then just follow these steps:
[list=1]
[*]Register on our forums here: [b]https://forum.thenorthpacific.org/[/b]
[*]Apply for the ministry here: [b]https://forum.thenorthpacific.org/topic/7198621/[/b]
[/list]
And a member of the Ministry will reach out to you with more information!

Regards,
[your name][/code]`,

"Communications": `[code]Hey %NATION%!

My name is [your name] and I have an opportunity you might be interested in! I'd like to take this moment to introduce you to the Ministry of Communications. Communications gets the word out on regional happenings. The ministry is responsible for:
[list]
[*]Publishing The Northern Lights, a quality publication about all kinds of matters, NationStates or otherwise;
[*]The North Star, a regular update on what's happening in the community;
[*]The Northern Broadcast Service, TNP's official radio channel;
[*]And much more!
[/list]
If any of that sounds interesting to you, I encourage you to join the Ministry of Communications! Here's how:
[list=1]
[*]Register on our forums here: [b]https://forum.thenorthpacific.org/[/b]
[*]Apply for the ministry here: [b]https://forum.thenorthpacific.org/topic/7198621/[/b]
[/list]
And a member of the Ministry will reach out to you with more information!

For a more detailed explanation of the executive staff see here: https://www.nationstates.net/page=dispatch/id=842834

Cheers,
[your name][/code]`,

"Culture": `[code]Hello %nation%!

I'm [your name] and I'd like you to join the Ministry of Culture. This is the Ministry that handles all the fun events that happen here--you may have encountered a telegram for an event run by culture, or spoken to a Gameside Advocate from the Ministry on the RMB! In short, culture is responsible for:
[list][*]Games and activities like online games and movie sessions;
[*]Promoting all the role playing The North Pacific has to offer;
[*]Designing logos, banners and other graphic elements;
[*]Overseeing the [url=page=display_region_rmb/region=the_north_pacific]regional message board[/url];[/list]
Additionally, culture is a great way to make friends and a name for yourself in TNP. You could even be delegate of The North Pacific someday thanks to culture!
If any of that interests you, %nation%, then just follow these steps to join us:
[list=1]
[*]Register on our forums here: [b]https://forum.thenorthpacific.org/[/b]
[*]Apply for the ministry here: [b]https://forum.thenorthpacific.org/topic/7198621/[/b]
[/list]
And a member of the Ministry will reach out to you with more information!

Regards,
[your name][/code]`,

"Foreign Affairs": `[code]Greetings, %NATION%:

Would you like to be a diplomat representing one of NationStates' foremost world powers? If so, the Ministry of Foreign Affairs is for you!

The Ministry of Foreign Affairs sends diplomats to other regions to represent TNP on an international scale. With our diplomatic corps you can learn about the broader NS world, pick up valuable knowledge, and meet new people.

All you have to do is:
[list=1]
[*]Register on our forums here: [b]https://forum.thenorthpacific.org/[/b]
[*]Apply for citizenship here (required): [b]https://forum.thenorthpacific.org/topic/9145386/[/b]
[*]Apply for the ministry here: [b]https://forum.thenorthpacific.org/topic/7198621/[/b]
[/list]
A leader of the diplomatic corps will then send you all the information you need.

Regards,
[Your name][/code]`,

"WA Ministry": `[code]Hi, %NATION%,

You might be familiar with the World Assembly. If you're not a member, you can learn what it is [url=page=dispatch/id=338371]here[/url]. Now, there are thousands of nations in the World Assembly. Wouldn't you like to magnify your voice?

Well, you can. The North Pacific's Ministry of World Assembly Affairs is responsible for determining the vote of our World Assembly delegate, who casts more votes than any nation in the game and is often a critical swing vote. Plus, the ministry partners with other regions, spreading influence even to other powerful delegates.

Even if you only want to be involved more casually, you can still cast your ballot on our active voting forum ([b]https://forum.thenorthpacific.org/forum/39609/[/b]) where you can make your opinion heard for every single resolution.

Does any of that sound good to you, %nation%? All you have to do is:
[list=1]
[*]Register on our forums here: [b]https://forum.thenorthpacific.org/[/b]
[*]Apply for the ministry here: [b]https://forum.thenorthpacific.org/topic/7198621/[/b]
[*]Check out our World Assembly voting threads here: [b]https://forum.thenorthpacific.org/forum/39609/[/b]
[/list]
...and a member of the ministry will send you a private message!

Hoping to see you around,
[Your name][/code]`,

"Discord": `[code]Hello there!

I'd like to invite you to The North Pacific's discord server. What makes TNP's discord so popular is all that it has to offer.
[spoiler=Check out what TNP Discord has to offer!]
~ A plethora of public text channels for just about anything NationStates-related (as well as some just for fun)
~ Voice chat (only if you want to!)
~ Direct Messaging (to a single player or a selected group)
~ Real-time updates (no need to keep refreshing the page like on the RMB and you can see when someone is typing)
~ Fun and stimulating conversations which you may have missed out on otherwise
~ And much more![/spoiler]
So what are you waiting for? Join The North Pacific's Discord Server here: https://discord.com/invite/7JWMWTm
 
Enter a nickname and you should be good to go! If you have any questions, feel free to reach out to me.

Thank you,

[Your Name][/code]`,

"Cards Guild": `[code]
Hello %NATION%!

I see you’ve really been on top of answering your nation’s issues! Issues are the foundation of NationStates, and can be a lot of fun to answer. You might've noticed that answering issues sometimes gives you packs of trading cards (unless you have that disabled in your settings - I highly recommend enabling it if that's the case). [b]Trading cards[/b] are a deep and complex game within NationStates, and are easily one of the most rewarding parts of it. Cards can be gained, bought, sold, and junked towards a goal you set for yourself - it could be climbing the deck value ladder, building a specific collection, or even just trading with your friends!

[url=https://www.nationstates.net/page=dispatch/id=1284592][b]The North Pacific Cards Guild[/b][/url] is the most prominent cards-based organization in the game, and is specifically designed to help players like you through the world of NationStates cards. Joining the Guild can easily jumpstart your cards career, and it's as easy as being a citizen and applying here: [u]https://forum.thenorthpacific.org/topic/9191329/[/u]

Not a citizen? Don't worry! You can become one here: [u]https://forum.thenorthpacific.org/topic/9145386/[/u]

The Cards Guild offers a wealth of opportunities to its members, detailed below.

[spoiler=Opportunities in Cards][list]
[*]Free cards (really) through the [url=https://www.nationstates.net/page=dispatch/id=1190924][b]Great Card Giveaway[/b][/url]!
[*][url=https://www.nationstates.net/page=dispatch/id=1328885][b]Pull events[/b][/url] to spawn [u]extremely[/u] valuable cards
[*]Free epic cards to jumpstart new collections through the [url=https://www.nationstates.net/page=dispatch/id=1332002][b]Epic Startup Program[/b][/url]
[*]A chance to win some of the most valuable cards in the game through the [url=https://www.nationstates.net/page=dispatch/id=1202626][b]WADP Card Lottery[/b][/url]
[*]Prizes for themed collections through the [url=https://www.nationstates.net/page=dispatch/id=1294812][b]Monthly Card Collection Competition[/b][/url]
[*]Awards for the best regional collections through the [url=https://www.nationstates.net/page=dispatch/id=1410827][b]Collection Spotlights[/b][/url]
[*]Statistics about market activity through the [url=https://www.nationstates.net/page=dispatch/id=1232461][b]Card Market Watch[/b][/url]
[*]Tools for finding cards through the [url=https://www.nationstates.net/page=dispatch/id=1293125][b]Card Queries[/b][/url]
[*]A dedicated [url=https://www.nationstates.net/page=dispatch/id=1429385][b]publication[/b][/url] to help you keep track of cards
[*]And much, much more![/list][/spoiler]

I sincerely hope you'll consider joining, and feel free to reach out to me if you have any questions! I hope to see you trading with the Cards Guild soon!

Thank you,

[Your Name][/code]`,

"Role Play": `[code]
Hello!

I hope you’re enjoying your time playing NationStates so far, and I’m happy you’ve chosen to reside in The North Pacific. Did you know that there's another world of possibilities available to you when it comes to building your nation? I’d like to tell you about one of the most lively and engaging aspects of the region: TNP’s RP community!

The North Pacific has an active role-play department where players can interact with each other’s nations. In addition to claiming land on a world map, you can sign treaties, fight wars, exchange ambassadors, and build up the story and culture of your nation. In RP, you have the power to flesh out your nation in an endless number of ways.

TNP currently has two main RP groups, one which is held on the regional forum, called “Eras,” and one that takes place on The North Pacific’s RMB (Regional Message Board), called “Strangereal.” Both communities have their own unique traits and merits, so you might want to try out one or both of them to find the right fit for you!

To get started with Eras, the forum RP, you can easily create a forum profile and then post your map claim in this thread: https://forum.thenorthpacific.org/topic/9189019/

To place a claim in Strangereal, the RMB RP, you can read this [url=https://www.nationstates.net/page=dispatch/id=1465611]dispatch[/url] and contact one of the cartography mods with your claim.

Regardless of which RP universe you end up in, I highly recommend you check out TNP’s official RP Discord server, which is an awesome place where you can engage with other RPers and learn all about how to get started with your own role-play: https://discord.gg/QRCxEYZ

If you have any questions or trouble joining the forums or Discord server, please let me know and I’ll be happy to help!

Thank you,

[Your Name]
[/code]`

};


function get_happenings() {
    return new Promise((resolve, reject) => {
        var url = "https://www.nationstates.net/cgi-bin/api.cgi?q=happenings;view=region.the_north_pacific;filter=founding+move;limit=200";
        var foundingRegex = /@@([a-zA-Z0-9_]+)@@ was founded in %%the_north_pacific%%/;
        var relocatedRegex = /@@([a-zA-Z0-9_]+)@@ relocated from %%(the_[a-zA-Z0-9_]+)%% to %%the_north_pacific%%/;
        var nationslst = [];

        fetch(url, {
            method: 'GET',
            headers: {
                'User-Agent': 'https://www.nationstates.net/nation=united_states_of_dictators'
            }
        })
        .then(response => {
            return response.text();
        })
        .then(xmlString => {
            const parser = new DOMParser();
            const xmlDocument = parser.parseFromString(xmlString, 'text/xml');
        
            const events = xmlDocument.querySelectorAll('EVENT');
        
            events.forEach(event => {
                const text = event.querySelector('TEXT').textContent;
                foundingMatch = text.match(foundingRegex);
                relocatedMatch = text.match(relocatedRegex);
    
                if (foundingMatch) {
                    nationslst.push(foundingMatch[1]);
                } else {
                    console.log('No match found');
                }
    
                if (relocatedMatch) {
                    nationslst.push(relocatedMatch[1]);
                } else {
                    console.log('No match found');
                }
            });
            resolve(nationslst); // Resolve the promise with the list of nations
        })
        .catch(error => {
            reject(error); // Reject the promise with the error
        });
    });
}



function get_list_template() {
    var lnum = document.getElementById('lnum').value;
    var lname = document.getElementById('lname').value;
    var temp = document.getElementById('temp-dropdown').value;

    get_happenings().then(nation_list => {
        const nation_urls = nation_list.map(nation_url => {
            return `[*]https://www.nationstates.net/page=compose_telegram?tgto=${nation_url.replace(/ /g, '_')}%2C%2Bregion%3Athe_north_pacific`;
        }).join('\n');

        var recruit_temp = templates[temp]

        var posting_template = `
        [center][IMG]https://forum.thenorthpacific.org/images/seals/moha_seal.png[/IMG]
        [B][big][big]List ${lnum}: ${lname}[/big][/big][/center]

        FOR INSTRUCTIONS ON HOW TO USE THIS TEMPLATE, SEE[/B] [URL]https://forum.thenorthpacific.org/topic/9067664/[/URL]

        Remember to change the [Your Nation] at the end of the telegram to the name of your nation! [B]In order to collect accurate delivery report data, we ask that you please create a new template every time we send out a new list, instead of saving and reusing the template IDs.[/B]

        To make your claim, please post below in this thread using this form:
        [TABLE]
        [TR]
        [TD]Claim: (ex. 150-200)
        Number of rows: (ex. 50)
        Delivered:
        Blocked:[/TD]
        [/TR]
        [/TABLE]
        For "claim" put the range of rows you intend to complete, and for "number of rows" put how many rows total you have claimed. When you are finished with your rows, you MUST edit your post to fill in the "delivered" and "blocked" sections of the form. Otherwise, we will assume the rows were not completed and record that in the roster as such.

        Oh, and before I forget, a favor. [B]Please be sure to claim the number of rows that you claim to be claiming![/B] If your number of rows claimed ends in zero, then the last digit of the end of the claimed rows range is the previous one regarding the last digit of the start of the claimed rows range. It is like adding 9 to the last digit of the start of the claimed rows range.

        (DO NOT INCLUDE WHICH NATIONS BLOCKED YOUR TELEGRAM)

        Please do skip obvious puppet nations. [b]Ensure that you do not telegram the same nation twice.[/b]

        ${recruit_temp}

        [SPOILER="List"]
        [list=1]
        ${nation_urls}
        [/list]
        [/SPOILER]
        `

        document.getElementById('outputBox').innerHTML = posting_template;
    }).catch(error => {
        console.error('Error fetching nation list:', error);
    });
}
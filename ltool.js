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
[code]Hello, %NATION%!

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

I hope to see you in the WA soon. Let me know if you have any questions!

Thanks,
[Your name][/code]
`
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


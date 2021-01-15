/* Function to Dump all the Posts */
function loadPosts(id) {
    var posts = [
        {id:"post1",author:"Srishti Gupta",title:"‘let’ me be a ‘const’(ant), not a ‘var’(iable)!",
        content:"Since JavaScript does not have any type-checking, either of these keywords can be used to declare a variable of any type (datatype) in JavaScript. Though all the three keywords are used for the same purpose, they are different."},
        {id:"post2",author:"Colby Fayock",title:"What is linting and how can it save you time?",
        content:"One of the biggest challenges in software development is time. It’s something we can’t easily get more of, but linting can help us make the most out of the time we have."},
        {id:"post3",author:"Yazeed Bzadough",title:"How to Get More Views on Your Tech Blog",
        content:"If you're a developer with a Twitter account, you've already seen everyone and their cat start a blog, YouTube channel, or Patreon. We all want to become stars, or at the very least, a recognizable name in the industry."},
        {id:"post4",author:"Cedd Burge",title:"How to write easily describable code",
        content:"When code is not describable using words, most people have to do some mental mapping to turn it in to words. This wastes mental energy, and you run the risk of getting the mapping wrong. Different people will map to different words, which leads to confusion when discussing the code."},
        {id:"post5",author:"Srishti Gupta",title:"Everything you should know about ‘module’ & ‘require’ in Node.js",
        content:"Node.js treats each JavaScript file as a separate module. For instance, if you have a file containing some code and this file is named xyz.js, then this file is treated as a module in Node, and you can say that you’ve created a module named xyz."}
    ];
    var template;

    console.log(posts[0].author);
    console.log(posts[1].title);
    console.log(posts[2].id);
    console.log(posts[3].title);
    console.log(posts[4].content);

    template = "<div class='flex-parent'>";

    for (var i=0;i<5;i++) {
        template += "<div class = 'flex-child'" + "id = " + posts[i].id + "></div>"
    }
    console.log(document.getElementById(id).innerHTML);
    document.getElementById(id).innerHTML += template;
    console.log(document.getElementById(id).innerHTML);
}
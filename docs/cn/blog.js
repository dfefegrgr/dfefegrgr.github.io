// blog.js

document.addEventListener('DOMContentLoaded', function() {
    // 添加 CSS 样式
    const style = document.createElement('style');
    style.textContent = `
        *, *::before, *::after {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            margin: 0;
            padding: 0;
           
        }
        nav {
            position:fixed;
            top:0;
            width:100%;
            z-index:1000
          
            justify-content: center;
            align-items: center;
            background-color: #66C7B4;
            color: #fff;
       
            font-size: 20px;
            font-weight: 550;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            min-height: 45px;
        }
        .nav-container{
        display:flex;
        justify-content:center;
        padding:10px
        }
        .nav-link{
        padding:10px 20px;
        }
    
        main {
            max-width: 740px;
            margin: 20px auto;
        }
        a {
            text-decoration: none;
            color: white;
            
        }
        h1 {
            color: #333;
        }
        h2 {
            color: #555;
            margin-bottom: 10px;
            
        }
        p {
        
        color: #555;
            line-height: 1.6;
        }
        .appIntroduction,.useMethod {
            background-color: white;
            margin-top: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            padding: 20px;
            
        }
        .comments {
            background-color: #fff;
            margin-top: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            padding: 10px 20px;
        }
        .comment {
            margin-bottom: 10px;
            padding: 10px;
            background-color: #f9f9f9;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        @media only screen and (max-width: 768px) {
            main {
                width: 90%;
            }
            .section, .comments {
                padding: 10px;
            }
            .appIntroduction {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        }

        .clearfix::after {
    content: "";
    display: table;
    clear: both;
}
        
    `;
    document.head.appendChild(style);

    // 创建页面结构
    const nav = document.createElement('nav');
    const container = document.createElement('div');
    container.classList.add('nav-container');
    // container.innerHTML = '<a href="#">首页</a> | <a href="#">关于</a> | <a href="#">联系</a>';
    // 创建三个 <a> 标签，并为它们添加相同的类名
    const links = ['首页', '关于', '联系'];
    links.forEach(linkText => {
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = linkText;
        link.classList.add('nav-link'); // 添加相同的类名
        container.appendChild(link);
    });

    nav.appendChild(container);

    //创建占位元素
    const placeholder = document.createElement('div');
    // placeholder.style.height=`${nav.offsetHeight}px`;

    const main = document.createElement('main');



    const appIntroduction = document.createElement('div');
    appIntroduction.classList.add('appIntroduction');
    appIntroduction.classList.add('clearfix');
    appIntroduction.innerHTML = '<div id="app-intro-heading">应用的基本介绍</div><div id="app-intro-content">这里是应用的基本介绍部分。您可以在这里写应用的功能、特点等内容。</div>';

    const useMethod = document.createElement('div');
    useMethod.classList.add('useMethod');
    useMethod.innerHTML = '<div id="use-method-heading">我的测评和感悟</div><div id="use-method-content">这里是您的测评和感悟部分。您可以在这里分享您对应用的使用体验、优缺点、个人见解等内容。</div>';

    const commentsDiv = document.createElement('div');
    commentsDiv.classList.add('comments');
    commentsDiv.innerHTML = '<div id="vcomments"></div>';

    main.appendChild(appIntroduction);
    main.appendChild(useMethod);
    main.appendChild(commentsDiv);

    document.body.appendChild(nav);
    document.body.appendChild(placeholder);
    // 等待页面加载完成后设置占位元素的高度
    window.onload = function() {
        placeholder.style.height = `${nav.offsetHeight}px`; // 使用导航栏的高度作为占位元素的高度
    };
    document.body.appendChild(main);

    // 初始化 Valine 评论框
    new Valine({
        el: '#vcomments',
        avatar:' ',
        appId: 'fpFVTETTTocPTl92vZ3kHBKG-gzGzoHsz',
        appKey: 'AU4TNUeLz87GbjWlvJ00UoSa'
    });
});

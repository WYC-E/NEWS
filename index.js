document.addEventListener('DOMContentLoaded', function() {
    fetch('https://news.baidu.com/n?cmd=7&loc=0&name=%B1%BE%A9&tn=rss')
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => {
            const feed = data.querySelectorAll('item');
            const container = document.getElementById('rss-feed');
            feed.forEach(item => {
                const entry = document.createElement('div');
                entry.innerHTML = `
                    <h2>${item.querySelector('title').textContent}</h2>
                    <p>${item.querySelector('description').textContent}</p>
                    <a href="${item.querySelector('link').textContent}">Read more</a>
                `;
                container.appendChild(entry);
            });
        })
        .catch(error => console.error('Error fetching RSS feed:', error));
});
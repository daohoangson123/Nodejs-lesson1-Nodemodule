import fs from 'fs';
import path from 'path';

const dataPath = path.resolve('src', 'data', 'posts.json');

const data = fs.readFileSync(dataPath);

const parseData = JSON.parse(data);

const pushData = {
    id: 10,
    title: 'Hướng Dẫn Lập Trình JavaScript Cơ Bản',
    content: 'Nội dung của bài viết về JavaScript cơ bản...',
    topic: 'Lập Trình',
    author: 'Vũ Đình Bảo',
    date: '2023-01-15',
};

parseData.posts.push(pushData);

console.log(parseData.posts.push(pushData));

// fs.writeFileSync(dataPath, JSON.stringify(parseData));

const findItem = parseData.posts.find((x) => x.id === 3);

console.log(JSON.stringify(findItem));

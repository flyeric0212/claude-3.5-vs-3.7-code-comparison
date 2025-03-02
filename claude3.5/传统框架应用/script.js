document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username || !password) {
        alert('请填写用户名和密码');
        return;
    }

    // 这里添加实际的登录逻辑
    console.log('登录信息：', {
        username,
        password
    });

    // 模拟登录请求
    simulateLogin(username, password);
});

function simulateLogin(username, password) {
    const loginBtn = document.querySelector('.login-btn');
    loginBtn.disabled = true;
    loginBtn.textContent = '登录中...';

    // 模拟网络请求
    setTimeout(() => {
        loginBtn.disabled = false;
        loginBtn.textContent = '登录';
        alert('登录成功！');
    }, 1500);
}
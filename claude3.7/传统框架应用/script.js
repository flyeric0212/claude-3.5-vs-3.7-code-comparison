document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const usernameError = document.getElementById('username-error');
    const passwordError = document.getElementById('password-error');
    const togglePassword = document.querySelector('.toggle-password');

    // 密码显示/隐藏功能
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);

        // 切换眼睛图标
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });

    // 表单验证
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;

        // 重置错误信息
        usernameError.textContent = '';
        passwordError.textContent = '';

        // 验证用户名
        if (usernameInput.value.trim() === '') {
            usernameError.textContent = '请输入用户名';
            isValid = false;
        } else if (usernameInput.value.length < 3) {
            usernameError.textContent = '用户名至少需要3个字符';
            isValid = false;
        }

        // 验证密码
        if (passwordInput.value === '') {
            passwordError.textContent = '请输入密码';
            isValid = false;
        } else if (passwordInput.value.length < 6) {
            passwordError.textContent = '密码至少需要6个字符';
            isValid = false;
        }

        // 如果验证通过，模拟登录
        if (isValid) {
            // 在实际应用中，这里应该发送请求到服务器进行身份验证
            console.log('登录表单提交:', {
                username: usernameInput.value,
                password: passwordInput.value,
                remember: document.getElementById('remember').checked
            });

            // 模拟登录成功
            alert('登录成功！');

            // 可以在这里重定向到其他页面
            // window.location.href = 'dashboard.html';
        }
    });

    // 实时验证
    usernameInput.addEventListener('input', function() {
        if (this.value.trim() !== '' && this.value.length >= 3) {
            usernameError.textContent = '';
        }
    });

    passwordInput.addEventListener('input', function() {
        if (this.value !== '' && this.value.length >= 6) {
            passwordError.textContent = '';
        }
    });
});
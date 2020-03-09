const btnSubmit = document.querySelector('.form-3d__submit-btn')
      const inputEmail = document.querySelector('.input-email input');
      const inputPassword = document.querySelector('.input-password input');
      const form3D = {
        _$form: document.querySelector('.form-3d'),
        addClass (className, deadLine) {
          this._$form.classList.add(className);

          if (deadLine) {
            setTimeout(() => this.removeClass(className), deadLine);
          }
        },
        removeClass (className) {
          this._$form.classList.remove(className);
        }
      };

      inputEmail.addEventListener('focus', (event) => {
        form3D.addClass('form-focus');
      });

      inputPassword.addEventListener('focus', (event) => {
        form3D.addClass('form-focus');
      });

      inputEmail.addEventListener('blur', (event) => {
        form3D.removeClass('form-focus');
      });

      inputPassword.addEventListener('blur', (event) => {
        form3D.removeClass('form-focus');
      });

      btnSubmit.addEventListener('click', (event) => {
        form3D.removeClass('form-focus');

        if (!inputEmail.value || !inputPassword.value) {
          form3D.addClass('form-invalid', 3000)
        } else {
          form3D.addClass('form-valid', 3000)
          inputEmail.value = '';
          inputPassword.value = '';
        }
      });
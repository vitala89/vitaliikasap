import {Component, inject, OnInit, signal} from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { t } from '../../../../shared/i18n/i18n.signal';
import { ToastrService } from 'ngx-toastr';
import emailjs from '@emailjs/browser';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form
      [formGroup]="form"
      (ngSubmit)="submit()"
      class="flex flex-col bg-white/90 dark:bg-neutral-800/90 rounded-3xl shadow-2xl p-8 h-full max-h-[800px] overflow-y-auto scrollbar-hide max-w-5xl mx-auto"
      autocomplete="off"
    >
      <div class="mb-2 flex items-center gap-2">
        <span class="inline-block mb-4 px-3 py-1 rounded-xl bg-neutral-200/80 dark:bg-neutral-700/80 text-neutral-600 dark:text-neutral-300 text-md font-semibold tracking-widest w-fit hover cursor-hover">
          {{ t('contact.badge') }}
        </span>
      </div>
      <h1 class="text-4xl md:text-4xl font-bold font-main mb-3 text-neutral-900 dark:text-white leading-tight">
        {{ t('contact.title') }}
      </h1>
      <p class="mb-8 text-lg text-neutral-600 dark:text-neutral-300">
        {{ t('contact.description') }}
      </p>

      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <input
            formControlName="name"
            [placeholder]="t('contact.fields.name')"
            class="w-full px-0 py-2 bg-transparent border-b border-neutral-200 dark:border-neutral-700 focus:outline-none focus:border-indigo-500 transition placeholder:font-normal placeholder:text-neutral-400 text-lg font-main"
            autocomplete="off"
          />
        </div>
        <div>
          <input
            formControlName="email"
            [placeholder]="t('contact.fields.email')"
            class="w-full px-0 py-2 bg-transparent border-b border-neutral-200 dark:border-neutral-700 focus:outline-none focus:border-indigo-500 transition placeholder:font-normal placeholder:text-neutral-400 text-lg font-main"
            autocomplete="off"
          />
        </div>
        <div>
          <input
            formControlName="phone"
            [placeholder]="t('contact.fields.phone')"
            class="w-full px-0 py-2 bg-transparent border-b border-neutral-200 dark:border-neutral-700 focus:outline-none focus:border-indigo-500 transition placeholder:font-normal placeholder:text-neutral-400 text-lg font-main"
            autocomplete="off"
          />
        </div>
        <div>
          <input
            formControlName="subject"
            [placeholder]="t('contact.fields.subject')"
            class="w-full px-0 py-2 bg-transparent border-b border-neutral-200 dark:border-neutral-700 focus:outline-none focus:border-indigo-500 transition placeholder:font-normal placeholder:text-neutral-400 text-lg font-main"
            autocomplete="off"
          />
        </div>
      </div>
      <div>
        <textarea
          formControlName="message"
          rows="3"
          [placeholder]="t('contact.fields.message')"
          class="w-full px-0 py-2 bg-transparent border-b border-neutral-200 dark:border-neutral-700 focus:outline-none focus:border-indigo-500 transition placeholder:font-normal placeholder:text-neutral-400 text-lg font-main resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        [disabled]="loading() || form.invalid"
        class="w-56 py-3 mt-6 rounded-2xl bg-indigo-400 border-transparent hover:bg-transparent hover:border-indigo-500 hover:rounded-none hover:border-2 hover:border-indigo-400 hover:text-indigo-500 hover:rounded-lg text-lg font-semibold shadow transition-all duration-200 flex items-center justify-center gap-2 text-neutral-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-neutral-900 disabled:hover:border-1 cursor-hover overflow-hidden relative"
      >
        <svg
          class="w-6 h-6 transition-transform duration-300"
          [class.animate-spin]="loading()"
          [class.animate-plane-fly]="success()"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path d="M22 2L11 13"></path>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
        <span
          class="transition-opacity duration-300"
          [class.animate-pulse-text]="loading()"
        >
          @if (loading()) {
            Wait...
          } @else if (success()) {
            Sent!
          } @else {
            {{ t('contact.fields.send') }}
          }
        </span>
      </button>
    </form>
  `,
  styles: [`
    @keyframes plane-fly {
      0% {
        transform: translateX(0) translateY(0) rotate(0deg);
        opacity: 1;
      }
      25% {
        transform: translateX(200px) translateY(-20px) rotate(15deg);
        opacity: 0.8;
      }
      50% {
        transform: translateX(400px) translateY(-10px) rotate(0deg);
        opacity: 0.6;
      }
      75% {
        transform: translateX(200px) translateY(5px) rotate(-5deg);
        opacity: 0.8;
      }
      100% {
        transform: translateX(0) translateY(0) rotate(0deg);
        opacity: 1;
      }
    }

    @keyframes pulse-text {
      0%, 100% {
        opacity: 1;
        transform: scale(1);
      }
      50% {
        opacity: 0.7;
        transform: scale(0.95);
      }
    }

    .animate-plane-fly {
      animation: plane-fly 2s ease-in-out forwards;
    }

    .animate-pulse-text {
      animation: pulse-text 1.5s ease-in-out infinite;
    }
  `]
})
export class ContactFormComponent implements OnInit {
  t = t;
  loading = signal(false);
  success = signal(false);

  private fb = inject(FormBuilder);
  private toastr = inject(ToastrService);

  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    subject: ['', Validators.required],
    message: ['', Validators.required]
  });

  ngOnInit() {
    // Initialize EmailJS
    emailjs.init(environment.emailjs.publicKey);
  }

  async submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading.set(true);
    this.success.set(false);

    try {
      // Prepare template parameters
      const templateParams = {
        from_name: this.form.value.name || '',
        from_email: this.form.value.email || '',
        phone: this.form.value.phone || '',
        subject: this.form.value.subject || '',
        message: this.form.value.message || '',
        to_name: 'Vitalii Kasap', // Replace with your actual name
        reply_to: this.form.value.email || ''
      };
      // Send email using EmailJS
      await emailjs.send(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        templateParams
      );

      // Trigger success animation
      this.success.set(true);

      // Reset success state after animation completes
      setTimeout(() => {
        this.success.set(false);
      }, 2000);

      this.toastr.success(this.t('contact.toast.success'));
      this.form.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      this.toastr.error(this.t('contact.toast.error'));
    } finally {
      this.loading.set(false);
    }
  }
}

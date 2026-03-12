/**
 * Taekwondo Design System - Component Examples
 * 
 * This file demonstrates how to implement design system components
 * in React/TypeScript with support for light and dark modes.
 * 
 * Copy and adapt these examples for your project components.
 */

// ============================================
// 1. BUTTON COMPONENT
// ============================================

import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'success' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-lg transition-colors duration-200 font-sans';

  const sizeStyles = {
    sm: 'px-4 py-2 text-body-sm',
    md: 'px-6 py-3 text-body',
    lg: 'px-8 py-4 text-body-lg',
  };

  const variantStyles = {
    primary: `
      bg-taekwondo-red-500 text-white 
      hover:bg-taekwondo-red-800 
      active:bg-taekwondo-red-900
      dark:bg-taekwondo-red-dark-500 
      dark:text-neutral-dark-0 
      dark:hover:bg-taekwondo-red-dark-600
      dark:active:bg-taekwondo-red-dark-700
    `,
    secondary: `
      bg-taekwondo-blue-500 text-white
      hover:bg-taekwondo-blue-600
      active:bg-taekwondo-blue-700
      dark:bg-taekwondo-blue-dark-500
      dark:hover:bg-taekwondo-blue-dark-600
    `,
    success: `
      bg-colombia-green-500 text-white
      hover:bg-colombia-green-600
      active:bg-colombia-green-700
      dark:bg-colombia-green-dark
      dark:hover:opacity-90
    `,
    warning: `
      bg-colombia-yellow-500 text-neutral-light-900
      hover:bg-colombia-yellow-600
      active:bg-colombia-yellow-700
      dark:bg-colombia-yellow-dark
      dark:text-neutral-light-900
    `,
  };

  const disabledStyles = disabled
    ? 'bg-neutral-light-300 dark:bg-neutral-dark-100 text-neutral-light-500 dark:text-neutral-light-500 cursor-not-allowed opacity-60'
    : '';

  return (
    <button
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabledStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// ============================================
// 2. CARD COMPONENT
// ============================================

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  [key: string]: any;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = false,
  ...props
}) => {
  const hoverClass = hoverable ? 'hover:shadow-light-lg dark:hover:shadow-dark-lg' : '';

  return (
    <div
      className={`
        bg-neutral-light-0 dark:bg-secondary-dark
        border border-light-primary dark:border-dark-primary
        rounded-md p-6
        shadow-light-sm dark:shadow-dark-sm
        transition-shadow duration-200
        ${hoverClass}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

// ============================================
// 3. INPUT / TEXT FIELD COMPONENT
// ============================================

interface InputProps {
  label?: string;
  error?: string;
  helperText?: string;
  [key: string]: any;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  className = '',
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-body font-semibold text-primary-light dark:text-primary-dark mb-2">
          {label}
        </label>
      )}
      <input
        className={`
          w-full
          bg-secondary-light dark:bg-secondary-dark
          border-2 border-light-primary dark:border-dark-primary
          rounded-base px-4 py-2
          text-primary-light dark:text-primary-dark
          placeholder-neutral-light-500
          focus:border-taekwondo-blue-500 dark:focus:border-taekwondo-blue-dark-500
          focus:outline-none focus:ring-3 focus:ring-taekwondo-blue-500 focus:ring-opacity-10
          transition-all duration-200
          disabled:bg-neutral-light-300 dark:disabled:bg-neutral-dark-100
          disabled:cursor-not-allowed disabled:opacity-60
          ${error ? 'border-red-500 focus:ring-red-500' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="mt-2 text-body-sm text-red-600 dark:text-red-400">{error}</p>
      )}
      {helperText && !error && (
        <p className="mt-2 text-body-sm text-secondary-light dark:text-secondary-dark">
          {helperText}
        </p>
      )}
    </div>
  );
};

// ============================================
// 4. BADGE / LABEL COMPONENT
// ============================================

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  className = '',
}) => {
  const variantStyles = {
    primary: `
      bg-taekwondo-red-500 dark:bg-taekwondo-red-dark-500
      text-white dark:text-neutral-dark-0
    `,
    secondary: `
      bg-taekwondo-blue-500 dark:bg-taekwondo-blue-dark-500
      text-white dark:text-neutral-dark-0
    `,
    success: `
      bg-colombia-green-500 dark:bg-colombia-green-dark
      text-white dark:text-neutral-dark-0
    `,
    warning: `
      bg-colombia-yellow-500 dark:bg-colombia-yellow-dark
      text-neutral-light-900 dark:text-neutral-light-900
    `,
  };

  return (
    <span
      className={`
        inline-block px-3 py-1 rounded-full
        text-caption font-semibold
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
};

// ============================================
// 5. HERO SECTION COMPONENT
// ============================================

interface HeroProps {
  title: string;
  subtitle?: string;
  cta?: {
    text: string;
    href: string;
  };
  children?: React.ReactNode;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  cta,
  children,
}) => {
  return (
    <section
      className={`
        relative py-20 px-4 overflow-hidden
        bg-gradient-to-br from-neutral-light-0 to-secondary-light
        dark:from-primary-dark dark:to-secondary-dark
      `}
    >
      {/* Gradient Overlay - Korean Red to Blue */}
      <div
        className={`
          absolute inset-0 opacity-5
          bg-gradient-to-r from-taekwondo-red-500 to-taekwondo-blue-500
          dark:opacity-10
        `}
      />

      <div className="relative max-w-4xl mx-auto">
        <h1 className="h1 text-primary-light dark:text-primary-dark mb-4">
          {title}
        </h1>

        {subtitle && (
          <p className="body-lg text-secondary-light dark:text-secondary-dark mb-8 max-w-2xl">
            {subtitle}
          </p>
        )}

        {cta && (
          <Button
            variant="primary"
            size="lg"
            className="mr-4"
            onClick={() => (window.location.href = cta.href)}
          >
            {cta.text}
          </Button>
        )}

        {children}
      </div>
    </section>
  );
};

// ============================================
// 6. NAVIGATION / NAVBAR COMPONENT
// ============================================

interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

interface NavbarProps {
  logo?: string;
  items: NavItem[];
  onDarkModeToggle?: (isDark: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  logo,
  items,
  onDarkModeToggle,
}) => {
  return (
    <nav
      className={`
        sticky top-0 z-50
        bg-neutral-light-0 dark:bg-primary-dark
        border-b border-light-primary dark:border-dark-primary
        shadow-light-md dark:shadow-dark-md
      `}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {logo && (
          <div className="h-10 w-10 bg-taekwondo-red-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">{logo}</span>
          </div>
        )}

        <ul className="flex gap-8">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`
                  text-body font-semibold transition-colors duration-200
                  ${
                    item.active
                      ? 'text-taekwondo-red-500 dark:text-taekwondo-red-dark-500 border-b-2 border-taekwondo-red-500'
                      : 'text-primary-light dark:text-primary-dark hover:text-taekwondo-red-500 dark:hover:text-taekwondo-red-dark-500'
                  }
                `}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {onDarkModeToggle && (
          <button
            onClick={() => onDarkModeToggle(document.documentElement.classList.contains('dark'))}
            className="p-2 rounded-lg hover:bg-secondary-light dark:hover:bg-secondary-dark transition-colors"
          >
            🌙
          </button>
        )}
      </div>
    </nav>
  );
};

// ============================================
// 7. FORM COMPONENT
// ============================================

interface FormField {
  name: string;
  label: string;
  type?: 'text' | 'email' | 'password' | 'textarea';
  required?: boolean;
  error?: string;
}

interface FormProps {
  title?: string;
  fields: FormField[];
  onSubmit: (data: Record<string, string>) => void;
  submitLabel?: string;
}

export const Form: React.FC<FormProps> = ({
  title,
  fields,
  onSubmit,
  submitLabel = 'Enviar',
}) => {
  const [formData, setFormData] = React.useState<Record<string, string>>({});
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {title && <h2 className="h2 text-primary-light dark:text-primary-dark">{title}</h2>}

      {fields.map((field) => (
        <Input
          key={field.name}
          name={field.name}
          label={field.label}
          type={field.type || 'text'}
          required={field.required}
          error={errors[field.name]}
          value={formData[field.name] || ''}
          onChange={handleChange}
          as={field.type === 'textarea' ? 'textarea' : 'input'}
        />
      ))}

      <Button type="submit" variant="primary" size="lg" className="w-full">
        {submitLabel}
      </Button>
    </form>
  );
};

// ============================================
// USAGE EXAMPLES
// ============================================

/*
// Example 1: Button with different variants
<div className="space-y-4">
  <Button variant="primary">Registrarse</Button>
  <Button variant="secondary">Ver más</Button>
  <Button variant="success">Confirmar</Button>
  <Button variant="warning">Cancelar</Button>
</div>

// Example 2: Card with content
<Card hoverable>
  <h3 className="h3 text-primary-light dark:text-primary-dark mb-2">
    Nuestras Clases
  </h3>
  <p className="body text-secondary-light dark:text-secondary-dark">
    Tenemos programas para todas las edades...
  </p>
</Card>

// Example 3: Form with inputs
<Form
  title="Contacto"
  fields={[
    { name: 'name', label: 'Nombre', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'message', label: 'Mensaje', type: 'textarea' },
  ]}
  onSubmit={(data) => console.log(data)}
/>

// Example 4: Dark mode toggle
<div className="p-4">
  <button
    onClick={() => document.documentElement.classList.toggle('dark')}
    className="px-4 py-2 rounded-lg bg-taekwondo-red-500 dark:bg-taekwondo-red-dark-500 
               text-white transition-colors duration-200"
  >
    Toggle Dark Mode
  </button>
</div>
*/

import { useState } from 'react'

const initialForm = { name: '', email: '', message: '' }

// In production, replace with your deployed backend URL (or keep '/api' if
// frontend and backend are served behind the same domain/reverse proxy).
const API_BASE = import.meta.env.VITE_API_BASE || '/api'

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const validate = () => {
    if (!form.name.trim()) return 'Name is required.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return 'Enter a valid email.'
    if (!form.message.trim()) return 'Message cannot be empty.'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const error = validate()
    if (error) {
      setStatus({ state: 'error', message: error })
      return
    }

    setStatus({ state: 'loading', message: '' })
    try {
      const res = await fetch(`${API_BASE}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Request failed')
      setForm(initialForm)
      setStatus({ state: 'success', message: 'Message sent — thank you!' })
    } catch (err) {
      setStatus({ state: 'error', message: 'Something went wrong. Please try again later.' })
    }
  }

  return (
    <section id="contact" className="section contact fade-in">
      <h2 className="section__title">Contact</h2>
      <p className="contact__intro">Have an opportunity or question? Send a message below.</p>

      <form className="contact__form" onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" value={form.name} onChange={handleChange} />
        </div>
        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" value={form.email} onChange={handleChange} />
        </div>
        <div className="form-row">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} />
        </div>

        <button className="btn btn--primary" type="submit" disabled={status.state === 'loading'}>
          {status.state === 'loading' ? 'Sending...' : 'Send Message'}
        </button>

        {status.message && (
          <p className={`form-status form-status--${status.state}`}>{status.message}</p>
        )}
      </form>
    </section>
  )
}

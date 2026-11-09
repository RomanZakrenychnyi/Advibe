const MENU_CLOSE_DELAY_MS = 150

let hashScrollHandled = false
let pendingPageTopScroll = false
let pendingPageTopScrollDelay = 0

export function markHashScrollHandled() {
  hashScrollHandled = true
}

export function markPendingPageTopScroll(delay = 0) {
  pendingPageTopScroll = true
  pendingPageTopScrollDelay = delay
}

export function consumePendingPageTopScroll() {
  const pending = pendingPageTopScroll
  const delay = pendingPageTopScrollDelay
  pendingPageTopScroll = false
  pendingPageTopScrollDelay = 0
  return pending ? { pending: true, delay } : { pending: false, delay: 0 }
}

export function consumeHashScrollHandled() {
  const handled = hashScrollHandled
  hashScrollHandled = false
  return handled
}

export function resetHashScrollHandled() {
  hashScrollHandled = false
}

export function getScrollDelay(afterMenuClose = false) {
  return afterMenuClose ? MENU_CLOSE_DELAY_MS : 0
}

export function scrollToTop({ smooth = true, delay = 0 } = {}) {
  function run() {
    window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' })
  }

  if (delay > 0) {
    window.setTimeout(run, delay)
    return
  }

  run()
}

export function scrollToSectionById(id, { smooth = true, delay = 0 } = {}) {
  function run() {
    const element = document.getElementById(id)
    if (!element) {
      return false
    }

    element.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' })
    return true
  }

  if (delay > 0) {
    window.setTimeout(run, delay)
    return true
  }

  return run()
}

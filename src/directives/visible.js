import classHelper from '../services/class'

const INVISIBLE = 'is-invisible'
const VISIBLE = 'is-visible'

const visible = {
  update(val) {
    classHelper.remove(this.el, VISIBLE)
    classHelper.remove(this.el, INVISIBLE)

    const className = val ? VISIBLE : INVISIBLE

    classHelper.add(this.el, className)
  }
}

const invisible = {
  update(val) {
    classHelper.remove(this.el, VISIBLE)
    classHelper.remove(this.el, INVISIBLE)

    const className = !val ? INVISIBLE : VISIBLE

    classHelper.add(this.el, className)
  }
}

export { visible, invisible }

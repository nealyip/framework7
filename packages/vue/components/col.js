import Utils from '../utils/utils';
import Mixins from '../utils/mixins';
import __vueComponentDispatchEvent from '../runtime-helpers/vue-component-dispatch-event.js';
import __vueComponentProps from '../runtime-helpers/vue-component-props.js';
export default {
  name: 'f7-col',
  props: Object.assign({
    id: [String, Number],
    tag: {
      type: String,
      default: 'div'
    },
    width: {
      type: [Number, String],
      default: 'auto'
    },
    tabletWidth: {
      type: [Number, String]
    },
    desktopWidth: {
      type: [Number, String]
    }
  }, Mixins.colorProps),

  render() {
    const _h = this.$createElement;
    const self = this;
    const props = self.props;
    const {
      className,
      id,
      style,
      tag,
      width,
      tabletWidth,
      desktopWidth
    } = props;
    const ColTag = tag;
    const classes = Utils.classNames(className, {
      col: width === 'auto',
      [`col-${width}`]: width !== 'auto',
      [`tablet-${tabletWidth}`]: tabletWidth,
      [`desktop-${desktopWidth}`]: desktopWidth
    }, Mixins.colorClasses(props));
    return _h(ColTag, {
      style: style,
      class: classes,
      on: {
        click: self.onClick.bind(self)
      },
      attrs: {
        id: id
      }
    }, [this.$slots['default']]);
  },

  methods: {
    onClick(e) {
      this.dispatchEvent('click', e);
    },

    dispatchEvent(events, ...args) {
      __vueComponentDispatchEvent(this, events, ...args);
    }

  },
  computed: {
    props() {
      return __vueComponentProps(this);
    }

  }
};
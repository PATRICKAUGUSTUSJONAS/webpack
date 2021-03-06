import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Hello from 'src/components/hello'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import store from 'src/vuex/store'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

describe('hello.vue', () => {
    it('should render correct contents', () => {
        const vm = new Vue({
            template: '<div><hello></hello></div>',
            store,
            components: {
                Hello{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
            }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
        }).$mount(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
        expect(vm.$el.querySelector('.hello h1').textContent).to.contain('Hello World!'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

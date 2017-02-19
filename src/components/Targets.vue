<template>
    <div id="targets">
        <h1>{{title}}</h1>
        <input type="text" autofocus autocomplete="off" v-model="newTarget" @keyup.enter="addTarget">
        <ul class="targets-list">
            <li v-for="target in targets" :key="target.id">
                {{ target.title }}
                <button @click="deleteTarget(target)">Удалить</button>
            </li>
        </ul>
    </div>
</template>

<script>
    var STORAGE_KEY = 'targets-vuejs-2.0'
    var targetsStorage = {
        fetch: function () {
            var targets = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [{id: 1, title: 'Новая цель'}];

            targets.forEach(function (target, index) {
                target.id = index
            })
            targetsStorage.uid = targets.length
            return targets
        },
        save: function (targets) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(targets))
        }
    };

    export default {
        name: 'targets',
        data () {
            return {
                title: 'Цели с мотивацией',
                newTarget: '',
                targets: targetsStorage.fetch()
            }
        },

        watch: {
            targets: {
                handler: function (targets) {
                    targetsStorage.save(targets)
                },
                deep: true
            }
        },

        methods: {
            addTarget: function () {
                var value = this.newTarget && this.newTarget.trim()
                if (!value) {
                    return
                }
                this.targets.push({
                    id: targetsStorage.uid++,
                    title: value,
                    completed: false
                })
                this.newTarget = ''
            },
            deleteTarget: function (target) {
                this.targets.splice(this.targets.indexOf(target), 1)
            },
        }
    }
</script>

<style lang="scss" scoped>
    #targets {
        text-align: left;

        h1 {
            text-align: center;
        }
    }

</style>
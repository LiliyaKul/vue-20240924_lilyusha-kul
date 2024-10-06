import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  name: 'MapApp',

  setup() {
    // Реактивные переменные для хранения координат метки
    const x = ref(0)
    const y = ref(0)
    const map = ref(null)
    /**
     * Обработчик клика по карте для установки координат метки
     * @param {MouseEvent} event
     */
    function handleClick(event) {
      x.value = event.offsetX
      y.value = event.offsetY
     
    }

    // Следим за X и Y для установки нового положения
    watch([x, y], () => {
      // Находим метку и изменяем её положение
      // const map = document.querySelector('.pin')
      
      map.value.style.left = `${x.value}px`
      map.value.style.top = `${y.value}px`
    })

    return {
      handleClick,
      map,
    }
  },

  template: `
    <div class="map" @click="handleClick">
      <img class="map-image" src="./map.png" alt="Map" draggable="false" />
      <span class="pin" ref="map">📍</span>
    </div>
  `,
})

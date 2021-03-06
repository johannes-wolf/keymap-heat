let layout_qwertz = {
  name: 'QWERTZ',
  key_tab: {
    'default': [
      ['°', '1', '2', '3', '4', '5',     /**/ '6', '7', '8', '9', '0', 'ß', '', '←'],
      ['tab', 'q', 'w', 'e', 'r', 't',   /**/ 'z', 'u', 'i', 'o', 'p', 'ü', '*'],
      ['caps', 'a', 's', 'd', 'f', 'g',  /**/ 'h', 'j', 'k', 'l', 'ö', 'ä', '\''],
      ['shift', '<', 'y', 'x', 'c', 'v', /**/ 'b', 'n', 'm', ',', '.', '-', 'shift'],
      ['ctrl', 'super', 'alt', ' ',                                   'alt', 'ctrl']
    ],
    'shift': [
      ['^', '!', '"', '§', '$', '%',     /**/ '&', '/', '(', ')', '=', '?', '`', '←'],
      ['tab', 'Q', 'W', 'E', 'R', 'T',   /**/ 'Z', 'U', 'I', 'O', 'P', 'Ü', '+'],
      ['caps', 'A', 'S', 'D', 'F', 'G',  /**/ 'H', 'J', 'K', 'L', 'Ö', 'Ä', '#'],
      ['shift', '>', 'Y', 'X', 'C', 'V', /**/ 'B', 'N', 'M', ';', ':', '_', 'shift'],
      ['ctrl', 'super', 'alt', ' ',                                   'alt', 'ctrl']
    ],
    'alt': [
      ['', '²', '³', '', '', '',     /**/ '&', '{', '[', ']', '}', '\\', '', '←'],
      ['tab', '@', '', '€', '', '',  /**/ '', '', '', '', '', '', '~'],
      ['caps'],
      ['shift', '|', '', '', '', '', /**/ '', '', 'µ', '', '', '', 'shift'],
      ['ctrl', 'super', 'alt', ' ',                                   'alt', 'ctrl']
    ]
  }
}

let layout_dvorac = {
  name: 'DVORAC',
  key_tab: {
    'default': [
      ['ò', '1', '2', '3', '4', '5',     /**/ '6', '7', '8', '9', '0', '[', ']', '←'],
      ['tab', '\'', ',', '.', 'p', 'y',  /**/ 'f', 'g', 'c', 'r', 'l', '/', '='],
      ['caps', 'a', 'o', 'e', 'u', 'i',  /**/ 'd', 'h', 't', 'n', 's', '-', '\\'],
      ['shift', ';', 'q', 'j', 'k',      /**/ 'x', 'b', 'm', 'w', 'v', 'z', 'shift'],
      ['ctrl', 'super', 'alt', ' ',                                   'alt', 'ctrl']
    ],
    'shift': [
      ['~', '!', '@', '#', '$', '%',     /**/ '^', '&', '*', '(', ')', '{', '}', '←'],
      ['tab', '"', '<', '>', 'P', 'Y',   /**/ 'F', 'G', 'C', 'R', 'L', '?', '+'],
      ['caps', 'A', 'O', 'E', 'U', 'I',  /**/ 'D', 'H', 'T', 'N', 'S', '_', '\\'],
      ['shift', ':', 'Q', 'J', 'K',      /**/ 'X', 'B', 'M', 'W', 'V', 'Z', 'shift'],
      ['ctrl', 'super', 'alt', ' ',                                   'alt', 'ctrl']
    ]
  }
}

let layout_qwerty = {
  name: 'QWERTY',
  key_tab: {
    'default': [
      ['°', '1', '2', '3', '4', '5',     /**/ '6', '7', '8', '9', '0', '-', '=', '←'],
      ['tab', 'q', 'w', 'e', 'r', 't',   /**/ 'y', 'u', 'i', 'o', 'p', '[', ']'],
      ['caps', 'a', 's', 'd', 'f', 'g',  /**/ 'h', 'j', 'k', 'l', ';', '\'', '\\'],
      ['shift', 'z', 'x', 'c', 'v',      /**/ 'b', 'n', 'm', ',', '.', '_', 'shift'],
      ['ctrl', 'super', 'alt', ' ',                                   'alt', 'ctrl']
    ],
    'shift': [
      ['^', '!', '@', '#', '$', '%',     /**/ '^', '&', '*', '(', ')', '_', '+', '←'],
      ['tab', 'Q', 'W', 'E', 'R', 'T',   /**/ 'Y', 'U', 'I', 'O', 'P', '{', '}'],
      ['caps', 'A', 'S', 'D', 'F', 'G',  /**/ 'H', 'J', 'K', 'L', ':', '"', '|'],
      ['shift', 'Z', 'X', 'C', 'V',      /**/ 'B', 'N', 'M', '<', '>', '?', 'shift'],
      ['ctrl', 'super', 'alt', ' ',                                   'alt', 'ctrl']
    ],
    'alt': [
      ['', '²', '³', '', '', '',     /**/ '&', '', '', '', '', '', '', '←'],
      ['tab', '', '', '', '', '',    /**/ '', '', '', '', '', '', '~'],
      ['caps'],
      ['shift', '', '', '', '', '',  /**/ '', '', 'µ', '', '', 'shift'],
      ['ctrl', 'super', 'alt', ' ',                                   'alt', 'ctrl']
    ]
  }
}

let layout_neo = {
  name: 'NEO2',
  key_tab: {
    'default': [
        ['ô', '1', '2', '3', '4', '5',        /**/ '6', '7', '8', '9', '0', '', 'ò', '←'],
        ['tab', 'x', 'v', 'l', 'c', 'w',      /**/ 'k', 'h', 'g', 'f', 'q', 'ß', "ó"],
        ['mod3', 'u', 'i', 'a', 'e', 'o',     /**/ 's', 'n', 'r', 't', 'd', 'y', 'mod3'],
        ['shift', 'mod4', 'ü', 'ö', 'ä', 'p', /**/ 'z', 'b', 'm', ',', '.', 'j', 'shift'],
        ['ctrl', 'super', 'alt', ' ',                                     'mod4', 'ctrl']
    ],
    'shift': [
        ['ô', '°', '§', 'ℓ', '»', '«',        /**/ '$', '€', '„', '“', '”', '—', 'ò', '←'],
        ['tab', 'X', 'V', 'L', 'C', 'W',      /**/ 'K', 'H', 'G', 'F', 'Q', 'ß', "ó"],
        ['mod3', 'U', 'I', 'A', 'E', 'O',     /**/ 'S', 'N', 'R', 'T', 'D', 'Y', 'mod3'],
        ['shift', 'mod4', 'Ü', 'Ö', 'Ä', 'P', /**/ 'Z', 'B', 'M', '–', '•', 'J', 'shift'],
        ['ctrl', 'super', 'alt', ' ',                                     'mod4', 'ctrl']
    ],
    'mod3': [
        ['',  '¹', '²', '³', '›', '‹',             /**/ '¢', '¥', '‚', '‘', '’', '',  '', '←'],
        ['tab', '…', '_', '[', ']', '^',           /**/ '!', '<', '>', '=', '&', "ſ", 'ø'],
        ['mod3', '\\', '/', '{', '}', '*',         /**/ '?', '(', ')', '-', ':', '@', 'mod3'],
        ['shift', 'mod4', '#', '$', '|', '~', '`', /**/ '+', '%', '"', '\'', ';', 'shift'],
        ['ctrl', 'super', 'alt', ' ',                                     'mod4', 'ctrl']
    ]
  }
}

let layout_neo_bone = {
  name: 'BONE',
  key_tab: {
    'default': [
        ['ô', '1', '2', '3', '4', '5',        /**/ '6', '7', '8', '9', '0', '', 'ò', '←'],
        ['tab', 'j', 'd', 'u', 'a', 'x',      /**/ 'p', 'h', 'l', 'm', 'w', 'ß', "ó"],
        ['mod3', 'c', 't', 'i', 'e', 'o',     /**/ 'b', 'n', 'r', 's', 'g', 'q', 'mod3'],
        ['shift', 'mod4', 'f', 'v', 'ü', 'ä', /**/ 'ö', 'y', 'z', ',', '.', 'k', 'shift'],
        ['ctrl', 'super', 'alt', ' ',                                     'mod4', 'ctrl']
    ],
    'shift': [
        ['ô', '°', '§', 'ℓ', '»', '«',        /**/ '$', '€', '„', '“', '”', '—', 'ò', '←'],
        ['tab', 'J', 'D', 'U', 'A', 'X',      /**/ 'P', 'H', 'L', 'M', 'W', 'ß', "ó"],
        ['mod3', 'C', 'T', 'I', 'E', 'O',     /**/ 'B', 'N', 'R', 'S', 'G', 'Q', 'mod3'],
        ['shift', 'mod4', 'F', 'V', 'Ü', 'Ä', /**/ 'Ö', 'Y', 'Z', ',', '.', 'K', 'shift'],
        ['ctrl', 'super', 'alt', ' ',                                     'mod4', 'ctrl']
    ],
    'mod3': layout_neo.key_tab.mod3
  }
}

let layout_colemak = {
  name: 'COLEMAK',
  key_tab: {
    'default': [
        ['~', '1', '2', '3', '4', '5',        /**/ '6', '7', '8', '9', '0', '-', '=', '←'],
        ['tab', 'q', 'w', 'f', 'p', 'g',      /**/ 'j', 'l', 'u', 'y', ';', '[', "]"],
        ['caps', 'a', 'r', 's', 't', 'd',     /**/ 'h', 'n', 'e', 'i', 'o', '\'', '\\'],
        ['shift', 'z', 'x', 'c', 'v', 'b',    /**/ 'k', 'm', '.', ',', '/', '', 'shift'],
        ['ctrl', 'super', 'alt', ' ',                                     'mod4', 'ctrl']
    ],
    'shift': [
        ['`', '!', '"', '§', '$', '%',        /**/ '&', '/', '(', ')', '=', '_', '+', '←'],
        ['tab', 'Q', 'W', 'F', 'P', 'G',      /**/ 'J', 'L', 'U', 'Y', ':', '{', "}"],
        ['caps', 'A', 'R', 'S', 'T', 'D',     /**/ 'H', 'N', 'E', 'I', 'O', '"', '|'],
        ['shift', 'Z', 'X', 'C', 'V', 'B',    /**/ 'K', 'M', '<', '>', '?', '', 'shift'],
        ['ctrl', 'super', 'alt', ' ',                                     'mod4', 'ctrl']
    ]
  }
}

let layout_neo_qwertz = {
  name: 'NEO QWERTZ',
  key_tab: {
    'default': [
      ['ô', '1', '2', '3', '4', '5',        /**/ '6', '7', '8', '9', '0', 'ß', 'ò', '←'],
      ['tab', 'q', 'w', 'e', 'r', 't',      /**/ 'z', 'u', 'i', 'o', 'p', 'ü', 'ó'],
      ['mod3', 'a', 's', 'd', 'f', 'g',     /**/ 'h', 'j', 'k', 'l', 'ö', 'ä', 'mod3'],
      ['shift', 'mod4', 'y', 'x', 'c', 'v', /**/ 'b', 'n', 'm', ',', '.', '-', 'shift'],
      ['ctrl', 'super', 'alt', ' ',                                   'mod4', 'ctrl']
    ],
    'shift': [
      ['¸', '°', '§', 'ℓ', '»', '«',        /**/ '$', '€', '„', '“', '”', '—', 'ò', '←'],
      ['tab', 'Q', 'W', 'E', 'R', 'T',      /**/ 'Z', 'U', 'I', 'O', 'P', 'Ü', 'õ'],
      ['mod3', 'A', 'S', 'D', 'F', 'G',     /**/ 'H', 'J', 'K', 'L', 'Ö', 'Ä', 'mod3'],
      ['shift', 'mod4', 'Y', 'X', 'C', 'V', /**/ 'B', 'N', 'M', '-', '•', '–', 'shift'],
      ['ctrl', 'super', 'alt', ' ',                                   'mod4', 'ctrl']
    ],
    'mod3': layout_neo.key_tab.mod3
  }
}

let layout_3_sprachen = { /* Could not find much info about this layout */
  name: '3-SPRACHEN',
  key_tab: {
    'default': [
      ['', '1', '2', '3', '4', '5',         /**/ '6', '7', '8', '9', '0', 'ß', '', '←'],
      ['tab', 'x', 'q', 'h', 'w', 'z',      /**/ 'c', 'd', 't', 'b', 'p', 'j', ''],
      ['caps', 'u', 'i', 'a', 'e', 'o',     /**/ 'l', 'r', 'n', 's', 'f', 'v', 'caps'],
      ['shift', 'mod4', 'ö', 'ä', 'ü', 'y', /**/ 'k', 'g', 'm', ',', '.', '-', 'shift'],
      ['ctrl', 'super', 'alt', ' ',                                   'mod4', 'ctrl']
    ],
    'shift': [
      ['', '1', '2', '3', '4', '5',         /**/ '6', '7', '8', '9', '0', 'ß', '', '←'],
      ['tab', 'X', 'Q', 'H', 'W', 'Z',      /**/ 'C', 'D', 'T', 'B', 'P', 'J', ''],
      ['caps', 'U', 'I', 'A', 'E', 'O',     /**/ 'L', 'R', 'N', 'S', 'F', 'V', 'caps'],
      ['shift', 'mod4', ';', '&', 'é', 'Y', /**/ 'K', 'G', 'M', '?', '!', '\'', 'shift'],
      ['ctrl', 'super', 'alt', ' ',                                   'mod4', 'ctrl']
    ]
  }
}


const layouts = {
  'qwertz': layout_qwertz,
  'qwerty': layout_qwerty,
  'dvorac': layout_dvorac,
  'neo': layout_neo,
  'neo_bone': layout_neo_bone,
  'neo_qwertz': layout_neo_qwertz,
  '3_sprachen': layout_3_sprachen,
  'colemak': layout_colemak,
}

function find_keys_for(layout, target)
{
  let chain = []

  const ignore = [' ', '\n']
  if (ignore.find((s) => s === target))
    return null

  if (layout['key_cache'] && layout['key_cache'][target]) {
    return layout.key_cache[target]
  }

  // Expecting _all_ modifiers to be present on the default layout!
  function find_modifier_key(keyname) {
    let default_tab = layout.key_tab.default
    for (let row = 0; row < default_tab.length; ++row) {
      for (let col = 0; col < default_tab[row].length; ++col) {
        if (default_tab[row][col] == keyname) {
          chain.push({
            row: row,
            column: col,
            key: keyname
          })
          return
        }
      }
    }
  }

  (() => {
  for (const [layer, rows] of Object.entries(layout.key_tab)) {
    for (let row = 0; row < rows.length; ++row) {
      for (let col = 0; col < rows[row].length; ++col) {
        if (rows[row][col] == target) {
          if (layer != 'default') {
            for (const mod_key of layer.split('+')) {
                find_modifier_key(mod_key)
            }
          }
          chain.push({
            row: row,
            column: col,
            key: target
          })
          return
        }
      }
    }
  }
  })();

  layout['key_cache'] = layout['key_cache'] || {}
  layout['key_cache'][target] = chain
  return chain
}

/**
 * This key badness is totaly made up.
 * I have rated the various finger movements I have to do
 * to reach certain keys from the home position.
 */
const key_badness_default = 25
const key_badness = [
  [100, 90, 80, 70, 50, 65, /**/ 65, 50, 60, 70, 80, 90, 100, 100],
  [25,  20, 20, 20, 20, 25, /**/ 25, 20, 20, 20, 20, 25],
  [10,   5,  5,  5,  5, 10, /**/ 10,  5,  5,  5,  5, 10],
  [50,  35, 20, 20, 20, 25, /**/ 25, 20, 20, 20, 35, 50],
  [100, 125, 150,         0,              150, 125]
]

const default_key_width = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2    ],
  [1.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], ///
  [2,   1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], //
  [1.5,  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.5  ],
  [1.7, 1.3, 1.3,       6.5,       1.3, 1.3] ///
]

function draw_rounded_rect(ctx, x, y, w, h, radius)
{
  ctx.beginPath()
  ctx.moveTo(x + radius, y)
  ctx.lineTo(x + w - radius, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + radius)
  ctx.lineTo(x + w, y + h - radius)
  ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h)
  ctx.lineTo(x + radius, y + h)
  ctx.quadraticCurveTo(x, y + h, x, y + h - radius)
  ctx.lineTo(x, y + radius)
  ctx.quadraticCurveTo(x, y, x + radius, y)
  ctx.closePath()
  ctx.stroke()
}

function draw_key(ctx, x, y, w, h, layout, label, heat, hits)
{
  draw_rounded_rect(ctx, x, y, w, h, 4)

  if (heat)
    ctx.fillStyle = `hsl(${(1.0 - heat) * 240}, 100%, 70%)`
  else
    ctx.fillStyle = '#ffffff'
  ctx.fill()

  if (label) {
    let midx = x + w/2
    let midy = y + h/2

    if (label == ' ')
      label = layout.name

    ctx.font = '20px serif'
    ctx.fillStyle = '#000000'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(label, midx, midy)

    if (hits > 0) {
      ctx.font = '12px serif'
      ctx.textAlign = 'right'
      ctx.textBaseline = 'top'
      ctx.fillText(`${hits}`, x + w - 2, y + 2)
    }
  }
}

function draw_keyboard(ctx, layout, mod, heatmap)
{
  layout = layout || layout_qwertz
  mod = mod || 'default'

  ctx.font = '20px serif'
  ctx.fillColor = '#000000'

  let canvas_w = ctx.canvas.clientWidth
  let canvas_h = ctx.canvas.clientHeight

  let longest_row = null
  for (r = 0; r < default_key_width.length; ++r) {
    let row_factor = 0
    let row = default_key_width[r]
    for (c = 0; c < row.length; ++c) {
      row_factor += row[c]
    }

    // Save the longest row
    if (!longest_row || longest_row.factor < row.factor) {
      longest_row = longest_row || {
        factor: row_factor,
        length: row.length
      }
    }
  }

  let outer_margin = 5
  let margin = 4
  let base_size = ((canvas_w - 2*outer_margin) - (longest_row.length - 1)*margin) / longest_row.factor

  function draw_return_key(ctx, x, y, radius) {
    let tw = 1.5 * base_size // Top width
    let bw = 1.0 * base_size // Bottom width
    let fh = 2.0 * base_size + margin // Full height

    ctx.beginPath()
    ctx.moveTo(x + radius, y)
    ctx.lineTo(x + tw - radius, y)
    ctx.quadraticCurveTo(x + tw, y, x + tw, y + radius)
    ctx.lineTo(x + tw, y + fh - radius)
    ctx.quadraticCurveTo(x + tw, y + fh, x + tw - radius, y + fh)
    ctx.lineTo(x + tw - bw + radius, y + fh)
    ctx.quadraticCurveTo(x + tw - bw, y + fh, x + tw - bw, y + fh - radius)
    ctx.lineTo(x + tw - bw, y + base_size + radius)
    ctx.quadraticCurveTo(x + tw - bw, y + base_size, x + tw - bw - radius, y + base_size)
    ctx.lineTo(x + radius, y + base_size)
    ctx.quadraticCurveTo(x, y + base_size, x, y + base_size - radius)
    ctx.lineTo(x, y + radius)
    ctx.quadraticCurveTo(x, y, x + radius, y)
    ctx.closePath()
    ctx.stroke()
  }

  let y = outer_margin
  for (r = 0; r < default_key_width.length; ++r) {
    let x = outer_margin

    let row = default_key_width[r]
    for (col = 0; col < row.length; ++col) {
      let w = base_size * row[col]
      let h = base_size

      let heat = 0
      let hits = 0
      if (heatmap) {
        heat = heatmap.heatmap[[r, col]] || 0
        hits = heatmap.hitmap[[r, col]] || 0
      }
      draw_key(ctx, x, y, w, h, layout, layout.key_tab[mod][r][col], heat, hits)

      x += w + margin
    }

    if (r == 1)
      draw_return_key(ctx, x, y, 5)

    y += base_size + margin
  }
}

function make_heatmap_for(layout, text)
{
  let hits_left = 0
  let hits_right = 0
  let hits_per_finger = [0, 0, 0, 0, 0]
  let hits_total = 0

  let hits = {} // Hits per key
  let high = 0  // Highest key hit
  for (const char of text) {
    let keys = find_keys_for(layout, char)
    if (keys && keys.length) {
      hits_total += keys.length
      for (const key of keys) {
        hits[[key.row, key.column]] = hits[[key.row, key.column]] + 1 || 1
        high = Math.max(high, hits[[key.row, key.column]])

        /* Count left/right hits */
        if (key.key != ' ' && key.key != 'shift') {
          if (key.column <= 5)
            ++hits_left
          else
            ++hits_right
        }

        /* Count hits per finger */
        if (key.key == ' ')
          ++hits_per_finger[0]
        else if (key.row == 4) {
          let finger = (key.column == 0 ? 4 :
                        key.column <= 2 ? 3 :
                        0)

          ++hits_per_finger[finger]
        } else {
          let row_offset = (key.row == 0 ? 1 :
                            key.row == 3 ? 1 :
                            0)
          let finger = (/*Left hand*/
                        key.column <= 1+row_offset ? 4 :
                        key.column == 2+row_offset ? 3 :
                        key.column == 3+row_offset ? 2 :
                        key.column <= 5+row_offset ? 1 :
                        /* Right hand */
                        key.column <= 7+row_offset ? 1 :
                        key.column == 8+row_offset ? 2 :
                        key.column == 9+row_offset ? 3 :
                        4)

          ++hits_per_finger[finger]
        }
      }
    }
  }

  let heatmap = {}
  for (const [key, count] of Object.entries(hits)) {
    heatmap[key] = count / high
  }

  return {
    heatmap: heatmap,
    hitmap: hits,
    hand: {
      left: hits_left / (hits_left + hits_right),
      right: hits_right / (hits_left + hits_right),
    },
    finger: {
      'thumb': hits_per_finger[0] / hits_total,
      'index': hits_per_finger[1] / hits_total,
      'mid': hits_per_finger[2] / hits_total,
      'ring': hits_per_finger[3] / hits_total,
      'pinky': hits_per_finger[4] / hits_total,
    }
  }
}

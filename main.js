document.addEventListener('DOMContentLoaded', main);

let cy = null;

function main() {
  const nodes = [
    { data: { id: 'n1', name: 'Adem' } },
    { data: { id: 'n2', name: 'İdris' } },
    { data: { id: 'n3', name: 'Nuh' } },
    { data: { id: 'n4', name: 'Hud' } },
    { data: { id: 'n5', name: 'Salih' } },
    { data: { id: 'n6', name: 'İbrahim' } },
    { data: { id: 'n7', name: 'Lut' } },
    { data: { id: 'n8', name: 'Şuayb' } },
    { data: { id: 'n9', name: 'İsmail' } },
    { data: { id: 'n10', name: 'İshak' } },
    { data: { id: 'n11', name: 'Yakup' } },
    { data: { id: 'n12', name: 'Yusuf' } },
    { data: { id: 'n13', name: 'Eyyub' } },
    { data: { id: 'n14', name: 'Zülkifl' } },
    { data: { id: 'n15', name: 'Harun' } },
    { data: { id: 'n16', name: 'Musa' } },
    { data: { id: 'n17', name: 'Davud' } },
    { data: { id: 'n18', name: 'İlyas' } },
    { data: { id: 'n19', name: 'Yunus' } },
    { data: { id: 'n20', name: 'Elyasa' } },
    { data: { id: 'n21', name: 'Süleyman' } },
    { data: { id: 'n22', name: 'Zekeriya' } },
    { data: { id: 'n23', name: 'Yahya' } },
    { data: { id: 'n24', name: 'İsa' } },
    { data: { id: 'n25', name: 'Muhammed' } },
  ];
  const edges = [
    { data: { id: 'e1', name: 'Neslinden', source: 'n1', target: 'n2' }, classes: 'descendant' },
    { data: { id: 'e2', name: 'Neslinden', source: 'n2', target: 'n3' }, classes: 'descendant' },
    { data: { id: 'e3', name: 'Neslinden', source: 'n3', target: 'n4' }, classes: 'descendant' },
    { data: { id: 'e4', name: 'Neslinden', source: 'n3', target: 'n6' }, classes: 'descendant' },
    { data: { id: 'e5', name: 'Neslinden', source: 'n3', target: 'n7' }, classes: 'descendant' },
    { data: { id: 'e6', name: 'Neslinden', source: 'n4', target: 'n5' }, classes: 'descendant' },
    { data: { id: 'e7', name: 'Neslinden', source: 'n7', target: 'n8' }, classes: 'descendant' },
    { data: { id: 'e8', name: 'Oğlu', source: 'n6', target: 'n9' }, classes: 'son' },
    { data: { id: 'e9', name: 'Oğlu', source: 'n6', target: 'n10' }, classes: 'son' },
    { data: { id: 'e10', name: 'Neslinden', source: 'n9', target: 'n25' }, classes: 'descendant' },
    { data: { id: 'e11', name: 'Oğlu', source: 'n10', target: 'n11' }, classes: 'son' },
    { data: { id: 'e12', name: 'Oğlu', source: 'n11', target: 'n12' }, classes: 'son' },
    { data: { id: 'e13', name: 'Neslinden', source: 'n12', target: 'n20' }, classes: 'descendant' },
    { data: { id: 'e14', name: 'Neslinden', source: 'n10', target: 'n13' }, classes: 'descendant' },
    { data: { id: 'e15', name: 'Oğlu', source: 'n13', target: 'n14' }, classes: 'son' },
    { data: { id: 'e16', name: 'Neslinden', source: 'n11', target: 'n15' }, classes: 'descendant' },
    { data: { id: 'e17', name: 'Neslinden', source: 'n11', target: 'n16' }, classes: 'descendant' },
    { data: { id: 'e18', name: 'Neslinden', source: 'n11', target: 'n16' }, classes: 'descendant' },
    { data: { id: 'e19', name: 'Neslinden', source: 'n11', target: 'n17' }, classes: 'descendant' },
    { data: { id: 'e20', name: 'Neslinden', source: 'n15', target: 'n18' }, classes: 'descendant' },
    { data: { id: 'e21', name: 'Neslinden', source: 'n11', target: 'n19' }, classes: 'descendant' },
    { data: { id: 'e22', name: 'Neslinden', source: 'n12', target: 'n20' }, classes: 'descendant' },
    { data: { id: 'e23', name: 'Oğlu', source: 'n17', target: 'n21' }, classes: 'son' },
    { data: { id: 'e24', name: 'Neslinden', source: 'n21', target: 'n22' }, classes: 'descendant' },
    { data: { id: 'e25', name: 'Oğlu', source: 'n21', target: 'n23' }, classes: 'son' },
    { data: { id: 'e26', name: 'Neslinden', source: 'n21', target: 'n24' }, classes: 'descendant' },
  ];
  cy = cytoscape({
    layout: {
      name: 'dagre',
      rankDir: 'LR',
      animate: true,
    },
    container: document.getElementById('cy'),
    wheelSensitivity: 0.1,
    style: [
      {
        selector: 'node',
        style: {
          'label': 'data(name)'
        }
      },
      {
        selector: 'edge.descendant',
        style: {
          'line-style': 'dotted'
        }
      },
    ],
    elements: { nodes: nodes, edges }
  });
}

function onSearchClicked() {
  const txt = document.getElementById('searchTxt').value;
  const elems = cy.$(`[name *= '${txt}']`);
  elems.select();
}

function top2bottomLayout() {
  cy.layout({
    name: 'dagre',
    rankDir: 'TB',
    animate: true,
  }).run();
}

function left2rightLayout() {
  cy.layout({
    name: 'dagre',
    rankDir: 'LR',
    animate: true,
  }).run();
}

function fcoseLayout() {
  cy.layout({
    name: 'fcose',
    animate: true,
  }).run();
}

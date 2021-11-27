import { Component, OnInit } from '@angular/core';
declare var fabric: any;

@Component({
  selector: 'app-prod-personalise',
  templateUrl: './prod-personalise.component.html',
  styleUrls: ['./prod-personalise.component.css']
})
export class ProdPersonaliseComponent implements OnInit {

  constructor() { }
  public bgc = 'white';
  public selectedValue = 'background_tshirt.png';
  prix = 12;
  tabimage: string[] = ['background_tshirt.png', 'longtshirt.png', 'capuche.png'];

  ngOnInit(): void {
    var canvas = new fabric.Canvas('c');
    var btn = document.getElementById('btnshape');
    btn.addEventListener('click', function() {
      var rect = new fabric.Rect({
        left: 200,
        top: 10,
        fill: 'red',
        width: 40,
        height: 50,
      });
      canvas.add(rect);
    });
    var btn = document.getElementById('btn');
    btn.addEventListener('click', function() {
      var text = new fabric.IText('Your Text Here', {
        left: 40, top: 100, fill: '#000000',
        fontSize: 20
      });
      canvas.add(text);
    });

    function addHandler(id, fn, eventName) {
      document.getElementById(id)[eventName || 'onclick'] = function() {
        var el = this;
        let obj;
        if (obj = canvas.getActiveObject()) {
          fn.call(el, obj);
          canvas.renderAll();
        }
      };
    }

    function setStyle(object, styleName, value) {
      if (object.setSelectionStyles && object.isEditing) {
        var style = {};
        style[styleName] = value;
        object.setSelectionStyles(style);
      } else {
        object[styleName] = value;
      }
    }

    function getStyle(object, styleName) {
      return (object.getSelectionStyles && object.isEditing)
        ? object.getSelectionStyles()[styleName]
        : object[styleName];
    }

    addHandler('size', function(obj) {
      setStyle(obj, 'fontSize', parseInt(this.value, 10));
    }, 'onchange');

    addHandler('height', function(obj) {
      setStyle(obj, 'lineHeight', parseInt(this.value, 10));
    }, 'onchange');

    addHandler('color', function(obj) {
      setStyle(obj, 'fill', this.value);
    }, 'onchange');

    addHandler('bg-color', function(obj) {
      setStyle(obj, 'textBackgroundColor', this.value);
    }, 'onchange');

    var btn = document.getElementById('deleteObjects');
    btn.addEventListener('click', function() {
      var activeObject = canvas.getActiveObject();

      if (activeObject) {
        if (confirm('Are you sure you want to delete objects?;')) {
          canvas.remove(activeObject);
        }
      }
    });
//upload image
    document.getElementById('uploadImg').onchange = function handleImage(e) {
      var reader = new FileReader();
      reader.onload = function(event) {
        var imgObj = new Image();
        imgObj.src = <string> event.target.result;
        imgObj.onload = function() {
          var image = new fabric.Image(imgObj);
          image.set({
            angle: 0,
            padding: 10,
            cornersize: 10,
          });
          canvas.centerObject(image);
          canvas.add(image);
          canvas.renderAll();
        };
      };
      reader.readAsDataURL((<HTMLInputElement> e.target).files[0]);
    };
    function onObjectSelected(e) {
      if ((e.target.get('type')) === 'i-text') {
        document.getElementById('textMenu').className = 'displayOperations';
      } else {
      }

    }
   


  }
  nouveauprix() {
    this.prix = this.prix + 5;
  }
  diminuerprix() {
    this.prix = this.prix - 5;
  }
}


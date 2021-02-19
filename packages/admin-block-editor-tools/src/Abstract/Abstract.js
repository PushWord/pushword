import css from "./index.css";
import make from "./make.js";

export default class Abstract {
    constructor({ data, config, api, readOnly }) {
        this.api = api;
        this.readOnly = readOnly;

        this.nodes = {};

        this.config = Object.assign(this.defaultConfig, config);
        this.CSS = Object.assign(this.defaultCSSClass, config.css || {});
        this.data = Object.assign(this.defaultData, data);
    }

    validate() {
        return Object.keys(this.data).length;
    }
    get defaultCSSClass() {
        return {
            inputClass: [this.api.styles.input, "cdx-input-editable"],
            hide: "hiden",
            previewWrapper: "preview-wrapper",
        };
    }

    get defaultData() {
        return {};
    }

    get defaultConfig() {
        return {};
    }

    get data() {
        return this._data;
    }

    set data(data) {
        this._data = Object.assign({}, data);
    }

    get STATE() {
        return { EDIT: 0, VIEW: 1 };
    }

    get toolbox() {
        throw "You must implement toolbox";
    }

    get isReadOnlySupported() {
        return true;
    }

    get enableLinkBreaks() {
        return false;
    }

    render() {
        this.nodes.wrapper = make.element("div", this.api.styles.block);
        this.nodes.preview = this.createPreview();
        this.nodes.wrapper.appendChild(this.nodes.preview);

        this.createEditBtn();
        this.nodes.wrapper.appendChild(this.nodes.editBtn);

        this.nodes.inputs = this.createInputs();
        this.nodes.wrapper.appendChild(this.nodes.inputs);

        this.init();

        this.nodes.editInput.addEventListener("change", () => this.onEditInputChange());
        return this.nodes.wrapper;
    }

    onEditInputChange() {
        this.nodes.editInput.checked ? (this.updateData(), this.show(this.STATE.VIEW)) : this.show(this.STATE.EDIT);
    }

    init() {
        this.validate() ? (this.updateData(), this.show(this.STATE.VIEW)) : this.show(this.STATE.EDIT);
    }

    createInputs() {
        throw "You must implement createInputs()";
    }

    updateData() {
        throw "You must implement updateData()";
    }

    createPreview() {
        return make.element("div", [this.CSS.hide, this.CSS.previewWrapper]);
    }

    save() {
        this.updateData();

        return this._data;
    }

    show(state) {
        if (state === this.STATE.VIEW) {
            this.nodes.preview.classList.remove(this.CSS.hide);
            this.nodes.inputs.classList.add(this.CSS.hide);
            return this.showEditBtn();
        }

        this.nodes.preview.classList.add(this.CSS.hide);
        this.nodes.inputs.classList.remove(this.CSS.hide);
        this.showEditBtn(this.STATE.EDIT);
    }

    createEditBtn() {
        const alea = Math.random().toString(36).substring(7);
        this.nodes.editBtn = make.element("div", "toggle-wrapper");
        this.nodes.editInput = make.element("input", ["toggle-input"], {
            type: "checkbox",
            id: "toggle_" + alea,
        });
        const label = make.element("label", ["toggle-label"], { for: "toggle_" + alea });

        this.nodes.editBtn.appendChild(this.nodes.editInput);
        this.nodes.editBtn.appendChild(label);

        return this.nodes.editBtn;
    }

    showEditBtn(state = 1) {
        if (void 0 === this.nodes.editBtn) throw "must createEditBtn before";

        this.nodes.editInput.checked = state === this.STATE.VIEW ? 1 : 0;
    }
}

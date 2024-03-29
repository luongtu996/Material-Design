class ChipComponent extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <wk-layout>
                <wk-layout-grid>

                    <wk-layout-column columnLarge="3">
                        <wk-chip-group>
                            <wk-chip input thumb="https://i.pravatar.cc/300">Input</wk-chip>
                            <wk-chip input icon="&#xE722;">Input</wk-chip>
                            <wk-chip input>Input</wk-chip>
                            <wk-chip input remove>Input</wk-chip>
                        </wk-chip-group>
                    </wk-layout-column>
                    <wk-layout-column columnLarge="3">
                        <wk-chip-group>
                            <wk-chip activated choice thumb="https://i.pravatar.cc/300">choice</wk-chip>
                            <wk-chip choice icon="&#xE722;">choice</wk-chip>
                            <wk-chip choice>choice</wk-chip>
                        </wk-chip-group>
                    </wk-layout-column>
                    <wk-layout-column columnLarge="3">
                        <wk-chip-group>
                            <wk-chip selected filter thumb="https://i.pravatar.cc/300">filter</wk-chip>
                            <wk-chip selected filter icon="&#xE722;">filter</wk-chip>
                            <wk-chip filter>filter</wk-chip>
                        </wk-chip-group>
                    </wk-layout-column>
                    <wk-layout-column columnLarge="3">
                        <wk-chip-group>
                            <wk-chip action thumb="https://i.pravatar.cc/300">action</wk-chip>
                            <wk-chip action icon="&#xE722;">action</wk-chip>
                            <wk-chip action>action</wk-chip>
                        </wk-chip-group>
                    </wk-layout-column>

                    <wk-layout-column columnLarge="3">
                        <wk-chip-group>
                            <wk-chip outlined thumb="https://i.pravatar.cc/300">Input</wk-chip>
                            <wk-chip disabled thumb="https://i.pravatar.cc/300">Input</wk-chip>
                            <wk-chip outlined icon="&#xE722;">Input</wk-chip>
                            <wk-chip outlined>Input</wk-chip>
                            <wk-chip outlined remove>Input</wk-chip>
                        </wk-chip-group>
                    </wk-layout-column>
                    <wk-layout-column columnLarge="3">
                        <wk-chip-group>
                            <wk-chip outlined activated choice thumb="https://i.pravatar.cc/300">choice</wk-chip>
                            <wk-chip outlined choice icon="&#xE722;">choice</wk-chip>
                            <wk-chip outlined choice>choice</wk-chip>
                        </wk-chip-group>
                    </wk-layout-column>
                    <wk-layout-column columnLarge="3">
                        <wk-chip-group>
                            <wk-chip outlined selected filter thumb="https://i.pravatar.cc/300">filter</wk-chip>
                            <wk-chip outlined selected filter icon="&#xE722;">filter</wk-chip>
                            <wk-chip outlined filter>filter</wk-chip>
                        </wk-chip-group>
                    </wk-layout-column>
                    <wk-layout-column columnLarge="3">
                        <wk-chip-group>
                            <wk-chip outlined action thumb="https://i.pravatar.cc/300">action</wk-chip>
                            <wk-chip outlined action icon="&#xE722;">action</wk-chip>
                            <wk-chip outlined action>action</wk-chip>
                        </wk-chip-group>
                    </wk-layout-column>

                </wk-layout-grid>
            </wk-layout>
        `
    }
}
customElements.define("chip-component", ChipComponent)

export default `<chip-component></chip-component>`
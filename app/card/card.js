class CardComponent extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <div class="layout">
                <div class="layout__grid">

                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--4-small">
                        <div class="card" style="width: 344px;">
                            <div class="card__media" style="background-image: url(https://picsum.photos/id/234/300/300);"></div>
                            <div class="card__supporting">
                                Greyhound divisively hello coldly wonderfully
                                marginally far upon excluding.
                            </div>
                        </div>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--4-small">
                        <div class="card" style="width: 344px;">
                            <div class="card__header">
                                <div class="card__header-thumb" style="background-image: url(https://i.pravatar.cc/300)"></div>
                                <div class="card__header-title">
                                    <div class="card__header-title-primary">Title</div>
                                    <div class="card__header-title-secondary">Subhead</div>
                                </div>
                            </div>
                            <div class="card__media" style="background-image: url(https://picsum.photos/id/234/300/300);"></div>
                            <div class="card__supporting">
                                Greyhound divisively hello coldly wonderfully
                                marginally far upon excluding.
                            </div>
                            <div class="card__action-group">
                                <div class="card__action-group-section card__action-group-section--start">
                                    <div class="button card__action">
                                        <div class="button__text">ACTION 1</div>
                                    </div>
                                    <div class="button card__action">
                                        <div class="button__text">ACTION 2</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--4-small">
                        <div class="card" style="width: 344px;">
                            <div class="card__header">
                                <div class="card__header-thumb" style="background-image: url(https://i.pravatar.cc/300)"></div>
                                <div class="card__header-title">
                                    <div class="card__header-title-primary">Title</div>
                                    <div class="card__header-title-secondary">Subhead</div>
                                </div>
                            </div>
                            <div class="card__media" style="background-image: url(https://picsum.photos/id/234/300/300);"></div>
                            <div class="card__action-group card__action-group--vertical">
                                <div class="card__action-group-section card__action-group-section--start">
                                    <div class="button card__action">
                                        <div class="button__text">ACTION 1</div>
                                    </div>
                                    <div class="button card__action">
                                        <div class="button__text">ACTION 2</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--4-small">
                        <div class="card" style="width: 344px;">
                            <div class="card__media" style="background-image: url(https://picsum.photos/id/234/300/300);"></div>
                            <div class="card__primary">
                                <div class="card__primary-text">Title goes here</div>
                                <div class="card__primary-subtext">Subtitle here</div>
                            </div>
                            <div class="card__action-group">
                                <div class="card__action-group-section card__action-group-section--start">
                                    <div class="button card__action">
                                        <div class="button__text">ACTION 1</div>
                                    </div>
                                    <div class="button card__action">
                                        <div class="button__text">ACTION 2</div>
                                    </div>
                                </div>
                                <div class="card__action-group-section card__action-group-section--end">
                                    <div class="button card__action">
                                        <div class="button__icon">&#xE720;</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--4-small">
                        <div class="card" style="width: 344px;">
                            <div class="card__media" style="background-image: url(https://picsum.photos/id/234/300/300);"></div>
                            <div class="card__primary">
                                <div class="card__primary-text">Title goes here</div>
                                <div class="card__primary-subtext">Subtitle here</div>
                            </div>
                            <div class="card__action-group">
                                <div class="card__action-group-section card__action-group-section--start">
                                    <div class="button card__action">
                                        <div class="button__text">ACTION 1</div>
                                    </div>
                                    <div class="button card__action">
                                        <div class="button__text">ACTION 2</div>
                                    </div>
                                </div>
                                <div class="card__action-group-section card__action-group-section--end">
                                    <div class="button card__action">
                                        <div class="button__icon">&#xE720;</div>
                                    </div>
                                </div>
                            </div>
                            <div class="card__supporting">
                                I'm a thing. But, like most politicians, he
                                promised more than he could deliver. You won't
                                have time for sleeping, soldier, not with all the
                                bed making you'll be doing. Then well go with
                                that data file! Hey, you add a one and two zeros
                                to that or we walk! You're going to do his
                                laundry? I've got to find a way to escape.
                            </div>
                        </div>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--4-small">
                        <div class="card" style="width: 344px;">
                            <div class="card__primary">
                                <div class="card__primary-text">Title goes here</div>
                                <div class="card__primary-subtext">Subtitle here</div>
                            </div>
                            <div class="card__supporting">
                                I'm a thing. But, like most politicians, he
                                promised more than he could deliver. You won't
                                have time for sleeping, soldier, not with all the
                                bed making you'll be doing. Then well go with
                                that data file! Hey, you add a one and two zeros
                                to that or we walk! You're going to do his
                                laundry? I've got to find a way to escape.
                            </div>
                            <div class="card__action-group">
                                <div class="card__action-group-section card__action-group-section--start">
                                    <div class="button card__action">
                                        <div class="button__text">ACTION 1</div>
                                    </div>
                                    <div class="button card__action">
                                        <div class="button__text">ACTION 2</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--4-small">
                        <div class="card" style="width: 344px;">
                            <div class="card__media" style="background-image: url(https://picsum.photos/id/234/300/300);"></div>
                            <div class="card__action-group">
                                <div class="card__action-group-section card__action-group-section--end">
                                    <div class="button card__action">
                                        <div class="button__icon">&#xE720;</div>
                                    </div>
                                    <div class="button card__action">
                                        <div class="button__icon">&#xE720;</div>
                                    </div>
                                    <div class="button card__action">
                                        <div class="button__icon">&#xE720;</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--4-small">
                        <div class="card" style="width: 344px;">
                            <div class="card__media card__media--1"
                                style="background-image: url(https://picsum.photos/id/234/300/300);">
                                <div class="card__media-protection">
                                    <div class="card__primary">
                                        <div class="card__primary-text">Title goes here</div>
                                        <div class="card__primary-subtext">Subtitle here</div>
                                    </div>
                                    <div class="card__action-group">
                                        <div class="card__action-group-section card__action-group-section--start">
                                            <div class="button card__action">
                                                <div class="button__text">ACTION 1</div>
                                            </div>
                                            <div class="button card__action">
                                                <div class="button__text">ACTION 2</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--4-small">
                        <div class="card" style="width: 344px;">
                            <div class="card__media card__media--1"
                                style="background-image: url(https://picsum.photos/id/234/300/300);">
                                <div class="card__media-protection">
                                    <div class="card__primary">
                                        <div class="card__primary-text">Title</div>
                                    </div>
                                </div>
                            </div>
                            <div class="card__action-group">
                                <div class="card__action-group-section card__action-group-section--end">
                                    <div class="button card__action">
                                        <div class="button__icon">&#xE720;</div>
                                    </div>
                                    <div class="button card__action">
                                        <div class="button__icon">&#xE720;</div>
                                    </div>
                                    <div class="button card__action">
                                        <div class="button__icon">&#xE720;</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--4-small">
                        <div class="card" style="width: 344px;">
                            <div class="card__surface">
                                <div class="card__primary">
                                    <div class="card__primary-text">Title here</div>
                                    <div class="card__primary-subtext">Subtitle here</div>
                                </div>
                                <div class="card__media card__media--80"
                                    style="background-image: url(https://picsum.photos/id/234/300/300);"></div>
                            </div>
                            <div class="card__action-group">
                                <div class="card__action-group-section card__action-group-section--start">
                                    <div class="button card__action">
                                        <div class="button__text">ACTION 1</div>
                                    </div>
                                    <div class="button card__action">
                                        <div class="button__text">ACTION 2</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--4-small">
                        <div class="card" style="width: 344px;">
                            <div class="card__surface">
                                <div class="card__primary">
                                    <div class="card__primary-text">Title here</div>
                                    <div class="card__primary-subtext">Subtitle here</div>
                                </div>
                                <div class="card__media card__media--120"
                                    style="background-image: url(https://picsum.photos/id/234/300/300);"></div>
                            </div>
                            <div class="card__action-group">
                                <div class="card__action-group-section card__action-group-section--start">
                                    <div class="button card__action">
                                        <div class="button__text">ACTION 1</div>
                                    </div>
                                    <div class="button card__action">
                                        <div class="button__text">ACTION 2</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--4-small">
                        <div class="card" style="width: 344px;">
                            <div class="card__surface">
                                <div class="card__primary">
                                    <div class="card__primary-text">Title here</div>
                                    <div class="card__primary-subtext">Subtitle here</div>
                                </div>
                                <div class="card__media card__media--160"
                                    style="background-image: url(https://picsum.photos/id/234/300/300);"></div>
                            </div>
                            <div class="card__action-group">
                                <div class="card__action-group-section card__action-group-section--start">
                                    <div class="button card__action">
                                        <div class="button__text">ACTION 1</div>
                                    </div>
                                    <div class="button card__action">
                                        <div class="button__text">ACTION 2</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--4-small">
                        <div class="card" style="width: 344px;">
                            <div class="card__surface">
                                <div class="card__media card__media--240"
                                    style="background-image: url(https://picsum.photos/id/234/300/300);"></div>
                                <div class="card__action-group card__action-group--vertical">
                                    <div class="card__action-group-section card__action-group-section--start">
                                        <div class="button card__action">
                                            <div class="button__icon">&#xE720;</div>
                                        </div>
                                        <div class="button card__action">
                                            <div class="button__icon">&#xE720;</div>
                                        </div>
                                        <div class="button card__action">
                                            <div class="button__icon">&#xE720;</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--4-small"></div>
                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--4-small"></div>
                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--4-small"></div>

                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--4-small">
                        <div class="card card--outlined" style="width: 344px;">
                            <div class="card__media" style="background-image: url(https://picsum.photos/id/234/300/300);"></div>
                            <div class="card__supporting">
                                Greyhound divisively hello coldly wonderfully
                                marginally far upon excluding.
                            </div>
                        </div>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--4-small">
                        <div class="card card--outlined" style="width: 344px;">
                            <div class="card__header">
                                <div class="card__header-thumb" style="background-image: url(https://i.pravatar.cc/300)"></div>
                                <div class="card__header-title">
                                    <div class="card__header-title-primary">Title</div>
                                    <div class="card__header-title-secondary">Subhead</div>
                                </div>
                            </div>
                            <div class="card__media" style="background-image: url(https://picsum.photos/id/234/300/300);"></div>
                            <div class="card__supporting">
                                Greyhound divisively hello coldly wonderfully
                                marginally far upon excluding.
                            </div>
                            <div class="card__action-group">
                                <div class="card__action-group-section card__action-group-section--start">
                                    <div class="button card__action">
                                        <div class="button__text">ACTION 1</div>
                                    </div>
                                    <div class="button card__action">
                                        <div class="button__text">ACTION 2</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--4-small">
                        <div class="card card--outlined" style="width: 344px;">
                            <div class="card__header">
                                <div class="card__header-thumb" style="background-image: url(https://i.pravatar.cc/300)"></div>
                                <div class="card__header-title">
                                    <div class="card__header-title-primary">Title</div>
                                    <div class="card__header-title-secondary">Subhead</div>
                                </div>
                            </div>
                            <div class="card__media" style="background-image: url(https://picsum.photos/id/234/300/300);"></div>
                            <div class="card__action-group card__action-group--vertical">
                                <div class="card__action-group-section card__action-group-section--start">
                                    <div class="button card__action">
                                        <div class="button__text">ACTION 1</div>
                                    </div>
                                    <div class="button card__action">
                                        <div class="button__text">ACTION 2</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--4-small">
                        <div class="card card--outlined" style="width: 344px;">
                            <div class="card__media" style="background-image: url(https://picsum.photos/id/234/300/300);"></div>
                            <div class="card__primary">
                                <div class="card__primary-text">Title goes here</div>
                                <div class="card__primary-subtext">Subtitle here</div>
                            </div>
                            <div class="card__action-group">
                                <div class="card__action-group-section card__action-group-section--start">
                                    <div class="button card__action">
                                        <div class="button__text">ACTION 1</div>
                                    </div>
                                    <div class="button card__action">
                                        <div class="button__text">ACTION 2</div>
                                    </div>
                                </div>
                                <div class="card__action-group-section card__action-group-section--end">
                                    <div class="button card__action">
                                        <div class="button__icon">&#xE720;</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--4-small">
                        <div class="card card--outlined" style="width: 344px;">
                            <div class="card__media" style="background-image: url(https://picsum.photos/id/234/300/300);"></div>
                            <div class="card__primary">
                                <div class="card__primary-text">Title goes here</div>
                                <div class="card__primary-subtext">Subtitle here</div>
                            </div>
                            <div class="card__action-group">
                                <div class="card__action-group-section card__action-group-section--start">
                                    <div class="button card__action">
                                        <div class="button__text">ACTION 1</div>
                                    </div>
                                    <div class="button card__action">
                                        <div class="button__text">ACTION 2</div>
                                    </div>
                                </div>
                                <div class="card__action-group-section card__action-group-section--end">
                                    <div class="button card__action">
                                        <div class="button__icon">&#xE720;</div>
                                    </div>
                                </div>
                            </div>
                            <div class="card__supporting">
                                I'm a thing. But, like most politicians, he
                                promised more than he could deliver. You won't
                                have time for sleeping, soldier, not with all the
                                bed making you'll be doing. Then well go with
                                that data file! Hey, you add a one and two zeros
                                to that or we walk! You're going to do his
                                laundry? I've got to find a way to escape.
                            </div>
                        </div>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--4-small">
                        <div class="card card--outlined" style="width: 344px;">
                            <div class="card__primary">
                                <div class="card__primary-text">Title goes here</div>
                                <div class="card__primary-subtext">Subtitle here</div>
                            </div>
                            <div class="card__supporting">
                                I'm a thing. But, like most politicians, he
                                promised more than he could deliver. You won't
                                have time for sleeping, soldier, not with all the
                                bed making you'll be doing. Then well go with
                                that data file! Hey, you add a one and two zeros
                                to that or we walk! You're going to do his
                                laundry? I've got to find a way to escape.
                            </div>
                            <div class="card__action-group">
                                <div class="card__action-group-section card__action-group-section--start">
                                    <div class="button card__action">
                                        <div class="button__text">ACTION 1</div>
                                    </div>
                                    <div class="button card__action">
                                        <div class="button__text">ACTION 2</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--4-small">
                        <div class="card card--outlined" style="width: 344px;">
                            <div class="card__media" style="background-image: url(https://picsum.photos/id/234/300/300);"></div>
                            <div class="card__action-group">
                                <div class="card__action-group-section card__action-group-section--end">
                                    <div class="button card__action">
                                        <div class="button__icon">&#xE720;</div>
                                    </div>
                                    <div class="button card__action">
                                        <div class="button__icon">&#xE720;</div>
                                    </div>
                                    <div class="button card__action">
                                        <div class="button__icon">&#xE720;</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--4-small">
                        <div class="card card--outlined" style="width: 344px;">
                            <div class="card__media card__media--1"
                                style="background-image: url(https://picsum.photos/id/234/300/300);">
                                <div class="card__media-protection">
                                    <div class="card__primary">
                                        <div class="card__primary-text">Title goes here</div>
                                        <div class="card__primary-subtext">Subtitle here</div>
                                    </div>
                                    <div class="card__action-group">
                                        <div class="card__action-group-section card__action-group-section--start">
                                            <div class="button card__action">
                                                <div class="button__text">ACTION 1</div>
                                            </div>
                                            <div class="button card__action">
                                                <div class="button__text">ACTION 2</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--4-small">
                        <div class="card card--outlined" style="width: 344px;">
                            <div class="card__media card__media--1"
                                style="background-image: url(https://picsum.photos/id/234/300/300);">
                                <div class="card__media-protection">
                                    <div class="card__primary">
                                        <div class="card__primary-text">Title</div>
                                    </div>
                                </div>
                            </div>
                            <div class="card__action-group">
                                <div class="card__action-group-section card__action-group-section--end">
                                    <div class="button card__action">
                                        <div class="button__icon">&#xE720;</div>
                                    </div>
                                    <div class="button card__action">
                                        <div class="button__icon">&#xE720;</div>
                                    </div>
                                    <div class="button card__action">
                                        <div class="button__icon">&#xE720;</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--4-small">
                        <div class="card card--outlined" style="width: 344px;">
                            <div class="card__surface">
                                <div class="card__primary">
                                    <div class="card__primary-text">Title here</div>
                                    <div class="card__primary-subtext">Subtitle here</div>
                                </div>
                                <div class="card__media card__media--80"
                                    style="background-image: url(https://picsum.photos/id/234/300/300);"></div>
                            </div>
                            <div class="card__action-group">
                                <div class="card__action-group-section card__action-group-section--start">
                                    <div class="button card__action">
                                        <div class="button__text">ACTION 1</div>
                                    </div>
                                    <div class="button card__action">
                                        <div class="button__text">ACTION 2</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--4-small">
                        <div class="card card--outlined" style="width: 344px;">
                            <div class="card__surface">
                                <div class="card__primary">
                                    <div class="card__primary-text">Title here</div>
                                    <div class="card__primary-subtext">Subtitle here</div>
                                </div>
                                <div class="card__media card__media--120"
                                    style="background-image: url(https://picsum.photos/id/234/300/300);"></div>
                            </div>
                            <div class="card__action-group">
                                <div class="card__action-group-section card__action-group-section--start">
                                    <div class="button card__action">
                                        <div class="button__text">ACTION 1</div>
                                    </div>
                                    <div class="button card__action">
                                        <div class="button__text">ACTION 2</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--4-small">
                        <div class="card card--outlined" style="width: 344px;">
                            <div class="card__surface">
                                <div class="card__primary">
                                    <div class="card__primary-text">Title here</div>
                                    <div class="card__primary-subtext">Subtitle here</div>
                                </div>
                                <div class="card__media card__media--160"
                                    style="background-image: url(https://picsum.photos/id/234/300/300);"></div>
                            </div>
                            <div class="card__action-group">
                                <div class="card__action-group-section card__action-group-section--start">
                                    <div class="button card__action">
                                        <div class="button__text">ACTION 1</div>
                                    </div>
                                    <div class="button card__action">
                                        <div class="button__text">ACTION 2</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--4-small">
                        <div class="card card--outlined" style="width: 344px;">
                            <div class="card__surface">
                                <div class="card__media card__media--240"
                                    style="background-image: url(https://picsum.photos/id/234/300/300);"></div>
                                <div class="card__action-group card__action-group--vertical">
                                    <div class="card__action-group-section card__action-group-section--start">
                                        <div class="button card__action">
                                            <div class="button__icon">&#xE720;</div>
                                        </div>
                                        <div class="button card__action">
                                            <div class="button__icon">&#xE720;</div>
                                        </div>
                                        <div class="button card__action">
                                            <div class="button__icon">&#xE720;</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--4-small"></div>
                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--4-small"></div>
                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--4-small"></div>

                </div>
            </div>
        `
    }
}
customElements.define("card-component", CardComponent)

export default `<card-component></card-component>`

import { Component, h } from '@stencil/core';

@Component({
    tag: 'add-post', //
    styleUrl: 'add-post.css'
})
export class IconPage {
    hi: string = 'not correct';
    input: string;

    render(): HTMLElement[] {
        return [
            <div class="main-panel">
                <top-nav-bar head = "Add Post"></top-nav-bar>


                <div class="content">
                    <div class="container-fluid">
                        <div class="container-fluid">
                            <div class="card">
                                <div class="card-header card-header-primary">
                                    <h4 class="card-title">Добавить пост</h4>
                                    <p class="card-category">Вид Поста</p>
                                </div>
                                <div class="card-body">
                                    <div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="asInput">
                                                    <label class="bmd-label-floating">
                                                        {'Первое'}
                                                    </label>
                                                    <div class="form-group bmd-form-group">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            onChange={(
                                                                e: any
                                                            ) => {
                                                                this.input =
                                                                    e.target.value;
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div class="asInput">
                                                    <label class="bmd-label-floating">
                                                        {'Второе'}
                                                    </label>
                                                    <div class="form-group bmd-form-group">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            onChange={(
                                                                e: any
                                                            ) => {
                                                                this.input =
                                                                    e.target.value;
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            
                                            
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ];
    }
}
